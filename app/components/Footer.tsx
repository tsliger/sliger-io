import React from 'react'
import { useColorMode } from '@chakra-ui/react'

export default function Footer() {
  const { colorMode } = useColorMode()
  return (
    <footer className="relative w-full h-96 bg-neutral-300 dark:bg-neutral-800 dark:text-stone-200 text-stone-800 ">
        <div className="w-full h-32 absolute top-0 -translate-y-[100%]">
            <svg className="w-full absolute bottom-0 translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={colorMode === 'dark' ? '#292524' : "#d4d4d4"} fill-opacity="1" d="M0,288L1440,256L1440,320L0,320Z"></path></svg>
        </div>
    </footer>
  )
}
