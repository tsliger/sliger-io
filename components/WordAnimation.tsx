import { motion } from "framer-motion";

export const Character = (props: any) => {
  return (
    <motion.span
      {...props}
      className="inline-block mr-2 underline decoration-[1.5px] dark:decoration-blue-800 decoration-orange-theme"
      transition={{ type: "spring", stiffness: 100 }}
    >
      {props.children}
    </motion.span>
  );
};
export const Word = (props: any) => {
  return (
    <motion.span ref={props.innerRef} {...props} className="inline-block mr-2">
      {props.children}
    </motion.span>
  );
};
