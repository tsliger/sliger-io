import { motion } from "framer-motion";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

interface NavButtonTypes {
  btnText: string;
  url?: Url;
}

const Navbutton = ({ btnText, url }: NavButtonTypes) => {
  return (
    <div className="nav-button z-1 overflow-hidden relative z-40">
      <motion.div
        whileHover={{
          opacity: 1,
          scale: 1.06,
          transition: { type: "spring", stiffness: 100, duration: 0.2 },
        }}
        transition={{ ease: "backIn", duration: 0.45, delay: 0.2 }}
        className="z-50  h-full w-full text-sm relative"
        style={{ zIndex: 90 }}
      >
        <Link
          className="w-full h-full top-0 left-0 grid place-items-center px-12 py-4"
          href={url ? url : "/"}
        >
          {btnText}
        </Link>
      </motion.div>
      <div className="ghost-btn" style={{ zIndex: -1 }}></div>
    </div>
  );
};

export default Navbutton;