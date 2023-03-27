import dynamic from 'next/dynamic';
import { sono } from '@/pages/_app'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from '@chakra-ui/react';
import { RxExternalLink } from 'react-icons/rx';
const ContactForm = dynamic(() => import( './ContactForm'));


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
        <div className="dark:bg-neutral-800 bg-neutral-300  w-1/3 hidden items-center space-y-8 lg:flex flex-col flex-grow pt-[175px] ">
             <motion.div animate={animationControl} ref={ref} className="opacity-0 flex flex-col space-y-8">
              <Link href='https://www.github.com/tsliger' isExternal>
                Github <RxExternalLink className=" inline mx-2" size={14} />
              </Link>
              <Link href='https://www.linkedin.com/in/tom-sliger' isExternal>
                Linkedin <RxExternalLink className=" inline mx-2" size={14} />
              </Link>
            </motion.div>
        </div>
        <motion.div animate={animationControl} ref={ref} className="w-full lg:w-2/3 opacity-0 flex-grow bg-[#cfcfcf] dark:bg-[#232323] flex flex-col items-center pt-40">
            <div className="w-[300px] lg:w-[500px] z-50">
              <h1 className={`text-3xl font-mono font-bold mb-4 ${sono.variable}`}>Reach Out</h1>
              <ContactForm />
            </div>
        </motion.div>
    </div>
  )
}
