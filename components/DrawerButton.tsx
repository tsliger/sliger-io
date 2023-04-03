import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Drawer = dynamic(() => import('./Drawer'))

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
