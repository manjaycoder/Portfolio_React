import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Scroll_and_reveal = ({ children, direction = "up" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // reveal when 20% is visible
  });

  // Direction variants
  const getDirectionVariant = (dir) => {
    switch (dir) {
      case "left":
        return { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "right":
        return { hidden: { x: 100, opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "down":
        return { hidden: { y: -100, opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "up":
      default:
        return { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getDirectionVariant(direction)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
export default Scroll_and_reveal;