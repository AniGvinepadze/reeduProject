import Categories from "./Categories";
import Roadmap from "./Roadmap";
import { motion } from "framer-motion";
export default function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const menuVariants = {
    closed: { x: "100%", opacity: 0, transition: { duration: 0.3 } },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <motion.div
      className="fixed inset-0 hidden max-650:block top-[72px] z-10  left-0 w-full mobileMenuHeight  bg-black bg-opacity-40"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <motion.div
        className="h-full w-[271px]  bg-lightGrey ml-auto  p-6"
        variants={menuVariants}
      >
        <div className="max-w-[223px] flex flex-col gap-6 ">
          <Categories />
          <Roadmap />
        </div>
      </motion.div>
    </motion.div>
  );
}
