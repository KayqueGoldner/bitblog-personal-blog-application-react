/**
 * node modules
 */
import { useNavigation } from "react-router";
import { motion, AnimatePresence } from "motion/react";

/**
 * custom modules
 */
import { cn } from "@/lib/utils";

/**
 * assets
 */
import { LoaderCircleIcon } from "lucide-react";

const fadeInOut = {
  initial: { opacity: 0, translateY: -10 },
  animate: { opacity: 1, translateY: 0 },
  exit: { opacity: 0, translateY: -10 },
};

export const Loading = ({ className }: React.ComponentProps<"div">) => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className={cn(
            "fixed left-1/2 -translate-x-1/2 top-[84px] p-2 bg-muted rounded-full shadow-lg",
            className,
          )}
        >
          <LoaderCircleIcon size={32} className="animate-spin" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
