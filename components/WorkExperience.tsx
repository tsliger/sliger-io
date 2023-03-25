import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { sono } from "@/pages/_app";
import { Divider } from "@chakra-ui/react";
import Typewriter from 'typewriter-effect';

export default function WorkExperience() {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  const blurbControl = useAnimation();
  const [isReady, setReady] = useState(false)

  useEffect(() => {
    if (inView) {
      setReady(true)
    }
  }, [inView])

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
        delay: 1.5,
        duration: 1,
        ease: "backOut",
      },
    });
  }

  return (
    <motion.div animate={animationControl} onAnimationComplete={playOtherAnim} ref={ref} className="opacity-0 mx-6">
      <h1
        className={`text-xl lg:text-3xl font-mono mb-4 pl-1 font-bold text-white ${sono.variable}`}
      >
        Work Experience
      </h1>
      <div className="card">
        <div className="min-h-[8rem] w-full px-4 lg:px-8 py-4 ">
          <div className="flex flex-col lg:flex-row justify-between">
            <div
              className={`text-md font-mono text-white ${sono.variable}`}
            >
              {isReady && (
                <Typewriter
                  options={{
                    cursor: ''
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('Anchor Systems')
                      .start();
                  }}
                />
              )}
            </div>
            <div className={`text-xs lg:text-sm font-mono pb-1 text-white  ${sono.variable}`}>
              {isReady && (
                <Typewriter
                  options={{
                    cursor: ''
                  }}
                  onInit={(typewriter) => {
                    typewriter.typeString('Feburary 2022 - March 2023')
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
                cursor: ''
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor(1500).typeString('Defense Contractor')
                  .start();
              }}
            />
          )}
          </div>
          <Divider />
          <motion.p animate={blurbControl} className="text-md py-4 text-white opacity-0">
            Designed, developed, and implemented software solutions to meet business
            requirements and technical specifications. Created multiple company websites,
            one with Next.js for an optimized production build. Worked with partners remotely to develop a frontend solution for Oxbow Security SIEM. Built and
            implemented a computer vision dataset to detect imperfections on a
            cargo container.  Carried out various other full stack development tasks, including developing REST services.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
