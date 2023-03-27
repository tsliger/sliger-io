import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sono } from "@/pages/_app";
import { Divider } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

export default function WorkExperience() {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const blurbControl = useAnimation();
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (inView) {
      setReady(true);
    }
  }, [inView]);

  if (inView) {
    animationControl.start({
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 1,
        ease: "easeInOut",
      },
    });
  }

  const playOtherAnim = () => {
    blurbControl.start({
      opacity: 1,
      scale: 0.98,
      transition: {
        delay: 1,
        duration: 1,
        ease: "easeInOut",
      },
    });
  };

  return (
    <motion.div
      animate={animationControl}
      onAnimationComplete={playOtherAnim}
      ref={ref}
      className="opacity-0 mx-6"
    >
      <h1
        className={`text-xl lg:text-3xl font-mono mb-4 pl-1 font-bold text-white ${sono.variable}`}
      >
        Education
      </h1>
      <div className="card">
        <div className="min-h-[8rem] w-full px-4 lg:px-8 py-4 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className={`text-md font-mono text-white ${sono.variable}`}>
              {isReady && (
                <Typewriter
                  options={{
                    cursor: "",
                    delay: 1,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString("Lake Superior State University")
                      .start();
                  }}
                />
              )}
            </div>
            <div
              className={`text-xs lg:text-sm font-mono pb-1 text-white  ${sono.variable}`}
            >
              {isReady && (
                <Typewriter
                  options={{
                    cursor: "",
                    delay: 1,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString("August 2018 - May 2022")
                      .start();
                  }}
                />
              )}
            </div>
          </div>
          <div className="text-white text-xs italic pb-4">
            {isReady && (
              <Typewriter
                options={{
                  cursor: "",
                  delay: 1,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1500)
                    .typeString("B.S. in Computer Science")
                    .start();
                }}
              />
            )}
          </div>
          <Divider />
          <motion.p
            animate={blurbControl}
            className="text-md py-4 text-white opacity-0"
          >
            Focused coursework in areas including algorithms and data
            structures, software development, web technologies, database
            systems, and mobile app development. Senior project was a Vue.js +
            PHP web app for storing assessment results for the university.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
