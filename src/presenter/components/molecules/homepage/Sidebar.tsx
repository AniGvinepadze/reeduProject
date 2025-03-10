import { AnimatePresence } from "framer-motion";
import { cn } from "../../../../utils/twMerge";
import Categories from "./Categories";
import MobileMenu from "./MobileMenu";
import Roadmap from "./Roadmap";
import { useState, useEffect } from "react";
export default function Sidebar({
  setSelectedCategory,

}: {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>,

}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  return (
    <div className="w-full flex flex-col gap-6 max-900:flex-row max-900:gap-2.5  ">
      <div className="rounded-[10px] w-full h-[137px] p-6 shadow-md flex flex-col max-650:flex-row justify-end max-650:justify-between max-650:items-center sidebarGradient max-900:w-[280px] max-900:h-[178px] max-900:p-4 max-650:w-full max-650:h-[72px] max-650:rounded-none">
        <div className="flex-col">
          <h2 className="text-xl font-bold text-white">Frontend Mentor</h2>
          <p className="text-[15px] font-medium text-white">Feedback Board</p>
        </div>
        <div
          className={cn(
            `menu-btn !hidden  max-650:!flex`,
            isMenuOpen ? "open" : ""
          )}
        >
          <div
            className="menu-btn_burger"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          ></div>
        </div>
      </div>
      <section className="max-650:hidden">
        <Categories setSelectedCategory={setSelectedCategory} />
      </section>
      <section className="max-650:hidden">
        <Roadmap />
      </section>
      <AnimatePresence>
  {isMenuOpen && (
    <MobileMenu isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setSelectedCategory={setSelectedCategory} />
  )}
</AnimatePresence>
    </div>
  );
}
