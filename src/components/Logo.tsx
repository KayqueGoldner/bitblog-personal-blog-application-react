/**
 * node modules
 */
import { Link } from "react-router";
import { motion } from "motion/react";

/**
 * components
 */
const MotionLink = motion.create(Link);

/**
 * assets
 */
import { logoLight, logoDark } from "@/assets";

export const Logo = () => {
  return (
    <MotionLink
      to="/"
      className="text-primary text-lg font-semibold"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      viewTransition
    >
      <img
        src={logoLight}
        alt="logo"
        width={115}
        height={32}
        className="hidden dark:block"
      />
      <img
        src={logoDark}
        alt="logo"
        width={115}
        height={32}
        className="block dark:hidden"
      />
    </MotionLink>
  );
};
