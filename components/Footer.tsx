import React from "react";
import { useColorMode } from "@chakra-ui/react";
import { BsGithub, BsLink, BsLinkedin } from 'react-icons/bs'
import { Link as LinkComp } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from 'next/link'
import { sono } from "@/pages/_app";


export default function Footer() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <footer className="relative flex flex-col w-full min-h-[275px] py-8 bg-neutral-800 text-stone-200 ">
      <div className="w-full h-32 absolute top-0 -translate-y-[100%]">
        <svg
          className="w-full absolute bottom-0 translate-y-1 z-1"
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
      <div className="flex-grow flex flex-col items-center justify-center z-10">
        <div className="flex space-x-8 ">
          <Link href={'https://www.github.com/tsliger'} target="_blank">
            <motion.div whileTap={{ scale: 1.05 }} className="rounded-full border-2 border-white/20 hover:text-slate-200 text-white/20 dark:hover:border-blue-800 border-dashed  hover:border-orange-theme transition-all duration-200 ease-in-out cursor-pointer  p-4">
              <BsGithub size={20} />
            </motion.div>
          </Link>
          <Link href={'https://www.linkedin.com/in/tom-sliger'} target="_blank">
            <motion.div whileTap={{ scale: 1.05 }} className="rounded-full border-2 border-white/20 hover:text-slate-200 text-white/20 dark:hover:border-blue-800 border-dashed  hover:border-orange-theme transition-all duration-200 ease-in-out cursor-pointer  p-4">
              <BsLinkedin size={20} />
            </motion.div>
          </Link>
        </div>
        <div className={`py-12 space-x-8 font-mono ${sono.variable}`}>
          <LinkComp onClick={() => router.push('/')}>
            About
          </LinkComp>
          <LinkComp onClick={() => router.push('/?loc=experience')}>
            Experience
          </LinkComp>
          <LinkComp onClick={() => router.push('/contact')}>
            Contact
          </LinkComp>
        </div>
      </div>
      <p className={`text-sm font-mono my-8 mx-auto ${sono.variable}`}>&copy; {new Date().getFullYear()} Thomas Sliger</p>
    </footer>
  );
}
