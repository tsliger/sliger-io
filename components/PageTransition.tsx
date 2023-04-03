import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.1,
      ease: "backOut"
    }
  }
};

const Transition = ({ children }: any) => {
    const { asPath } = useRouter();
    return (
      <>
        <AnimatePresence
          initial={false}
          mode="wait"
        >
          <motion.div 
            key={asPath}
            variants={variants}
            animate="in"
            initial="out"
            exit="out"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </> 
    )
};
  
export default Transition;