import { motion, stagger } from "framer-motion";
import { useState } from "react";
const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren:0.4 },
    },
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3","item4"];
  return (
    <div className="test">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
export default Test;
