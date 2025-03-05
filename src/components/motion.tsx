import { motion } from "motion/react";

type MotionProps = {
  isVisible: boolean;
} & React.ComponentProps<typeof motion.div>;

const Motion: React.FC<MotionProps> = ({ isVisible, whileHover, whileTap }) => {
  return (
    <motion.div
      animate={{ opacity: isVisible ? 1 : 0 }}
      whileHover={whileHover}
      whileTap={whileTap}
      className="rounded bg-blue-500 p-4 text-white"
    />
  );
};

export default Motion;
