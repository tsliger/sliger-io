"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sono } from "@next/font/google";
import ColorModeButton from "./ColorModeButton";

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
});

const Character = (props: any) => {
  return (
    <motion.span
      {...props}
      className="inline-block mr-2 underline decoration-[1.5px] decoration-orange-theme"
      transition={{ type: "spring", stiffness: 500 }}
    >
      {props.children}
    </motion.span>
  );
};

const Word = (props: any) => {
  return (
    <motion.span ref={props.innerRef} {...props} className="inline-block mr-2">
      {props.children}
    </motion.span>
  );
};

interface NavButtonTypes {
  btnText: string;
}

const Navbutton = ({ btnText }: NavButtonTypes) => {
  return (
    <div className="nav-button z-1 overflow-hidden">
      <motion.p
        whileHover={{
          opacity: 1,
          scale: 1.06,
          transition: { type: "spring", stiffness: 100, duration: 0.2 },
        }}
        transition={{ ease: "backIn", duration: 0.45, delay: 0.2 }}
        className="z-50 px-12 py-4 h-full w-full text-sm"
      >
        {btnText}
      </motion.p>
    </div>
  );
};

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const ctrls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev: number = scrollY.getPrevious();
    const curr: number = scrollY.get();

    if (curr < prev) {
      setHidden(false);
    } else if (curr > 100 && curr > prev) {
      setHidden(true);
    }
  });

  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -80, transition: { duration: 0.75 } },
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const text = "thomas sliger";

  useEffect(() => {
    console.log(inView);

    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  return (
    <motion.nav
      variants={variants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
      className={`h-24 bg-neutral-300 dark:bg-neutral-800 dark:text-stone-200 flex items-center text-stone-800 z-50 fixed w-full font-semibold tracking-widest text-2xl ${sono.variable} font-mono`}
    >
      <div className="min-w-[30%] h-full flex items-center mx-8 select-none cursor-pointer origin-left">
        {text.split(" ").map((word, index) => {
          return (
            <Word
              innerRef={ref}
              aria-hidden="true"
              key={index}
              initial="hidden"
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
            >
              {word.split("").map((character, index) => {
                return (
                  <Character
                    aria-hidden="true"
                    key={index}
                    variants={characterAnimation}
                  >
                    {character}
                  </Character>
                );
              })}
            </Word>
          );
        })}
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        className="opacity-0 flex-grow h-full font-sans flex items-center justify-end mx-16 space-x-8"
      >
        <Navbutton btnText={"About"} />
        <Navbutton btnText={"Experience"} />
        <Navbutton btnText={"Contact Me"} />
        <ColorModeButton />
      </motion.div>
    </motion.nav>
  );
}
