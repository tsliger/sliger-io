import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
const ColorModeButton = dynamic(() => import("./ColorModeButton"));
const Navbutton = dynamic(() => import("./Navbutton"));

interface DrawerTypes {
  isOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer ({ isOpen, setDrawerOpen }: DrawerTypes) {
  const searchParams = useSearchParams();
  useEffect(() => {
    setDrawerOpen(false);
  }, [searchParams, setDrawerOpen]);
  return (
    <div className="fixed top-0 left-0 h-full w-full " hidden={!isOpen}>
      <div className="h-24 -z-1" />
      <div className="dark:bg-neutral-800 space-y-8 bg-neutral-300 min-h-[800px] h-full">
        <Navbutton btnText={"Home"} url={"/"} />
        <Navbutton btnText={"Experience"} url={"/?loc=experience"} />
        <Navbutton btnText={"Contact"} url={"/contact"} />
        <div className="px-4">
          <ColorModeButton />
        </div>
      </div>
    </div>
  );
};
