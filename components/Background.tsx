import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
const BackgroundCanvas = dynamic(() => import("./BackgroundCanvas"), {
  ssr: true,
})

export default function Background() {
  const { colorMode } = useColorMode();
  const searchParams = useSearchParams();
  const svgRef: any = useRef(null);

  useEffect(() => {
    const location = searchParams?.get("loc");

    let elem: any = document?.getElementById("content-home");

    if (elem && location === "experience") {
      elem.scrollIntoView();
    }
  }, [searchParams]);

  return (
    <div
      className={
        "min-h-[800px] h-screen dark:bg-neutral-800 bg-neutral-300 relative flex flex-col-reverse lg:flex-row-reverse"
      }
    >
      <div
        className={`flex flex-col h-[60%] lg:h-full justify-center px-8 lg:px-36 leading-8 flex-grow lg:w-1/2`}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1, skewY: -1 }}
          transition={{ ease: "backInOut", duration: 1.5, delay: 0.5 }}
          className="bottom-12 relative opacity-0"
        >
          <p className="text-[0.87rem] relative leading-[1.5rem] lg:leading-loose md:text-base">
            I am a highly skilled
            and experienced software engineer, passionate about developing
            elegant solutions to challenging problems. With a solid background
            in computer science and a keen eye for detail, I bring a depth of
            knowledge to each project I undertake. Whether it&apos;s building a
            scalable web application or designing a machine
            learning algorithm, I am dedicated to creating software that not
            only meets but exceeds client expectations. Thanks for visiting my portfolio, and I look
            forward to the opportunity to work with you.
          </p>
        </motion.div>
      </div>
      <div className="lg:h-full h-[40%] overflow-hidden  bg-[#cfcfcf] dark:bg-[#232323] flex-grow w-full lg:w-1/2">
          <div className="w-full h-full overflow-hidden pt-24 lg:aspect-square grid place-items-center">
              <div className="h-full w-full lg:-translate-y-16">
                <BackgroundCanvas />
              </div>
          </div>
      </div>
      <svg
        ref={svgRef}
        className="absolute block bottom-0 border-0 translate-y-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colorMode === "dark" ? "#1e40af" : "#ff5500"}
          fillOpacity="1"
          d="M0,192L720,256L1440,224L1440,320L720,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
