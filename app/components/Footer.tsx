"use client"

import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { sono } from './Navbar'



export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <footer className="relative flex flex-col w-full min-h-[275px] bg-neutral-800 text-stone-200 ">
      <div className="w-full h-32 absolute top-0 -translate-y-[100%]">
        <svg
          className="w-full absolute bottom-0 translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill='#262626'
            fillOpacity="1"
            d="M0,288L1440,256L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex-grow">

      </div>
      <p className={`text-sm font-mono my-8 mx-auto ${sono.variable}`}>&copy; {new Date().getFullYear()} Thomas Sliger</p>
    </footer>
  );
}
