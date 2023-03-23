import React, { useState } from "react";
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";
import { useColorMode } from "@chakra-ui/react";

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [hovering, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={toggleColorMode}
      className="relative h-12 w-12 border-2 border-black/20 dark:border-white/20 dark:hover:text-slate-200 dark:text-white/20 dark:hover:border-blue-800 border-dashed text-black/20 hover:text-black hover:border-orange-theme transition-all duration-200 ease-in-out cursor-pointer rounded-md grid place-items-center"
    >
      {colorMode === "light" && <TiWeatherNight />}
      {colorMode === "dark" && <TiWeatherSunny />}
    </div>
  );
}
