"use client";

import React from 'react'
import ContactForm from './ContactForm';
import { sono } from './Navbar';
import { motion, useAnimation } from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function ContactBackground() {
  const {inView, entry, ref} = useInView();
  const animationControl = useAnimation();

  if (inView) {
    animationControl.start({
      opacity: 1,
      transition: {
        delay: 0.7,
      }
    });
  }

  return (
    <div className="min-h-[800px] dark:bg-neutral-800 bg-neutral-300 h-screen flex">
        <div className="dark:bg-neutral-800 bg-neutral-300  w-1/3 flex-grow ">
            
        </div>
        <motion.div animate={animationControl} ref={ref} className="w-2/3 opacity-0 flex-grow bg-[#cfcfcf] dark:bg-[#232323] flex flex-col items-center justify-center">
            <div className="w-[500px] z-50">
              <h1 className={`text-3xl font-mono font-bold mb-4 ${sono.variable}`}>Reach Out</h1>
              <ContactForm />
            </div>
        </motion.div>
    </div>
  )
}
