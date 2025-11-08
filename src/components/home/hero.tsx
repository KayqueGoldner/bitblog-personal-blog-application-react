/**
 * node modules
 */
import { motion } from "motion/react";

/**
 * custom modules
 */
import { cn } from "@/lib/utils";

/**
 * components
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

/**
 * types
 */
import type { Variants } from "motion/react";

/**
 * constants
 */
const HERO = {
  headline: "Mastering the Craft, One Bit at a Time",
  text: "This blog is built on a simple principle: The best way to understand a topic is to explain it. Follow along through a growing library of articles that break down the complexities of modern web development.",
} as const;

/**
 * motion variants
 */
const containerVariant: Variants = {
  to: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childVariant: Variants = {
  from: { opacity: 0, filter: "blur(10px)" },
  to: {
    opacity: 1,
    filter: "blur(0)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Hero = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <section className={cn("section", className)} {...props}>
      <motion.div
        className="container"
        initial="from"
        whileInView="to"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h1
          className="text-3xl font-semibold text-balance text-center md:text-4xl xl:text-5xl"
          variants={childVariant}
        >
          {HERO.headline}
        </motion.h1>

        <motion.p
          className="mt-5 mb-8 text-balance text-center text-muted-foreground md:text-xl"
          variants={childVariant}
        >
          {HERO.text}
        </motion.p>

        <motion.div
          className="max-w-md mx-auto flex items-center gap-2"
          variants={childVariant}
        >
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            aria-label="Enter your email"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
