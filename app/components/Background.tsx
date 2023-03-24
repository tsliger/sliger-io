"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useColorMode } from "@chakra-ui/react";
import { sono } from "./Navbar";
import { useSearchParams } from "next/navigation";

import { fragmentShader, vertexShader } from "../misc/shaders";

export function Box() {
  const myMesh = useRef(null);

  useFrame(({ clock }) => {
    const mesh: any = myMesh.current;

    mesh.rotation.y = Math.sin(clock.getElapsedTime() / 4);
  });

  return (
    <mesh ref={myMesh} rotation={[Math.PI / 6, 0, 0]} position={[0, 1, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="royalblue" />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}

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
  }, []);

  return (
    <div
      className={
        "min-h-[800px] h-screen dark:bg-neutral-800 bg-neutral-300 relative flex flex-col-reverse lg:flex-row-reverse"
      }
    >
      <div
        className={`flex flex-col h-[60%] lg:h-full justify-center text-sm md:text-base px-6 lg:px-20 leading-8 flex-grow lg:w-1/2`}
      >
        <motion.div
          initial={{ x: 55, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1, skewY: -1 }}
          transition={{ ease: "backInOut", duration: 1.5, delay: 0.1 }}
          className="bottom-12 relative opacity-0"
        >
          <h1 className={`text-3xl font-mono mb-2 font-bold ${sono.variable}`}>
            About
          </h1>
          <p>
            A full stack developer with experience developing dynamic and
            interactive web applications using React.js, TypeScript, and other
            modern web technologies. Possess a wide understanding of web
            architecture, design patterns, and software development
            methodologies. Proficient in a plethora of programming languages
            including C++. Adept at building high-performance, scalable, and
            user-friendly web applications.
          </p>
        </motion.div>
      </div>
      <div className="lg:h-full h-[40%] bg-[#cfcfcf] dark:bg-[#232323] flex-grow w-full lg:w-1/2">
        <div className="w-full h-full overflow-hidden pt-24 lg:aspect-square grid place-items-center">
          <Canvas>
            <pointLight position={[0, 3, 10]} />
            <Box />
            <gridHelper
              args={[30, 30, 0xff5500, "grey"]}
              rotation-x={Math.PI / 8}
              position={[0, -1, 0]}
            />
          </Canvas>
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
