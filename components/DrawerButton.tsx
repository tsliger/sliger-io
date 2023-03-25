import React, { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Navbutton } from "./Navbar";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
const ColorModeButton = dynamic(() => import('./ColorModeButton'))

const Drawer = ({ isOpen, setDrawerOpen }: any) => {
  const searchParams = useSearchParams();
  useEffect(() => {
    setDrawerOpen(false)
  }, [searchParams, setDrawerOpen]);
  return (
    <div className="fixed top-0 left-0 h-full w-full " hidden={!isOpen}>
      <div className="h-24 -z-1" />
      <div className="dark:bg-neutral-800 space-y-8 bg-neutral-300 min-h-[800px] h-full">
        <Navbutton btnText={"About"} url={"/"} />
        <Navbutton btnText={"Experience"} url={"/?loc=experience"} />
        <Navbutton btnText={"Contact"} url={"/contact"} />
        <div className="px-4">
          <ColorModeButton />
        </div>
      </div>
    </div>
  );
};

export default function DrawerButton() {
  const [isOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    }

    return () => {
      window.onscroll = null;
    };
  }, [isOpen]);

  return (
    <>
      <motion.div
        whileTap={{ scale: 1.05 }}
        onClick={() => setDrawerOpen(!isOpen)}
        animate={{ opacity: 1 }}
        className="z-50 aspect-square opacity-0  lg:hidden h-12 w-12 border-2 border-black/20 dark:border-white/20 dark:hover:text-slate-200 dark:text-white/20 dark:hover:border-blue-800 border-dashed text-black/20 hover:text-black hover:border-orange-theme transition-all duration-200 ease-in-out cursor-pointer rounded-md grid place-items-center"
      >
        {!isOpen && <RxHamburgerMenu />}

        {isOpen && <VscClose />}
      </motion.div>
      <Drawer isOpen={isOpen} setDrawerOpen={setDrawerOpen}/>
    </>
  );
}
