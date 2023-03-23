"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Sono } from "@next/font/google";

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
});

function Box() {
  const myMesh = useRef(null);

  useFrame(({ clock }) => {
    console.log("Hey, I'm executing every frame!")

    const mesh: any = myMesh.current;

    mesh.rotation.y = Math.sin(clock.getElapsedTime() / 4);
  })
  
  return (
    <mesh ref={myMesh} rotation={[Math.PI / 6, 0, 0]} position={[0, 1, 0]}> 
      <boxGeometry/>
      <meshStandardMaterial color="royalblue"/>
    </mesh>
  )
}


export default function Background() {
  return (
    <div className={"min-h-[800px] h-screen dark:bg-neutral-800 bg-neutral-300 relative pt-32"}>
      <div className=" absolute top-0 right-0  w-1/2 flex flex-col h-full justify-center px-20 leading-8">
        <motion.div initial={{ x: 55, scale:0.95 }} animate={{ x: 0, opacity: 1, scale: 1, skewY: -1 }} transition={{ease: "backInOut", duration: 1.5, delay: 0.1}} className="bottom-12 relative opacity-0">
          <h1 className={`text-3xl font-mono mb-2 font-bold ${sono.variable}`}>About</h1>
          <p>A full stack developer with experience developing dynamic and interactive web applications using React.js, TypeScript, and other modern web technologies. Possess a wide understanding of web architecture, design patterns, and software development methodologies. Proficient in a plethora of programming languages including C++. Adept at building high-performance, scalable, and user-friendly web applications.</p>
        </motion.div>
      </div>
      <div className="absolute w-1/2 left-0 top-0 h-full bg-[#cfcfcf] dark:bg-[#232323]">
        <div className="w-full aspect-square grid place-items-center">
          <Canvas>
            <pointLight position={[0, 3, 10]} />
            <Box />
            <gridHelper args={[30, 30, 0xff5500, 'grey']} rotation-x={Math.PI / 8} position={[0, -1, 0]} />
          </Canvas>
        </div>
      </div>
      {/* <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ff5500"  fill-opacity="1" d="M0,160L48,160C96,160,192,160,288,149.3C384,139,480,117,576,122.7C672,128,768,160,864,192C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
      <svg className="absolute block bottom-0 border-0 translate-y-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fill-opacity="1" d="M0,192L720,256L1440,224L1440,320L720,320L0,320Z"></path></svg>
    </div>
  )
}