"use client"

import React, { useState } from 'react'
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx"
import { VscClose } from "react-icons/vsc"
import {
    motion,
  } from "framer-motion";

export default function DrawerButton() {
  const [isOpen, setDrawerOpen] = useState(false)
  return (
    <motion.div
      onClick={() => setDrawerOpen(!isOpen)}
      animate={{ opacity: 1 }}
      className="absolute opacity-0 right-8 lg:hidden h-12 w-12 border-2 border-black/20 dark:border-white/20 dark:hover:text-slate-200 dark:text-white/20 dark:hover:border-blue-800 border-dashed text-black/20 hover:text-black hover:border-orange-theme transition-all duration-200 ease-in-out cursor-pointer rounded-md grid place-items-center"
    >
      {!isOpen && (
        <RxHamburgerMenu />
      )}

      {isOpen && (
        <VscClose />
      )}
    </motion.div>
  )
}
