import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  motion,
  useScroll,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sono } from "@/pages/_app";
import { Word, Character } from "./WordAnimation";
const DrawerButton = dynamic(() => import("./DrawerButton"));
const ColorModeButton = dynamic(() => import("./ColorModeButton"));
const Navbutton = dynamic(() => import("./Navbutton"));

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeInOut", duration: 0.3 },
    },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: {
      opacity: 0,
      y: -80,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.60em`,
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
      className={`h-24 z-[60] px-6 lg:px-16 bg-neutral-300 dark:bg-neutral-800 dark:text-stone-200 flex items-center text-stone-800  fixed w-full font-semibold tracking-widest text-2xl ${sono.variable} font-mono`}
    >
      <div className="w-full lg:w-[30%] relative text-sm lg:text-2xl h-full flex flex-col lg:flex-row justify-center lg:justify-start lg:items-center select-none cursor-pointer origin-left">
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
        className="opacity-0 lg:flex hidden space-x-8 flex-grow h-full font-sans items-center justify-end "
      >
        <Navbutton btnText={"Home"} url={"/"} />
        <Navbutton btnText={"Experience"} url={"/?loc=experience"} />
        <Navbutton btnText={"Contact"} url={"/contact"} />
        <ColorModeButton />
      </motion.div>
      <DrawerButton />
    </motion.nav>
  );
}
