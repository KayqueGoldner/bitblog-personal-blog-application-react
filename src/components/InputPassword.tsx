/**
 * node modules
 */
import { useState } from "react";

/**
 * custom modules
 */
import { cn } from "@/lib/utils";

/**
 * components
 */
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";

/**
 * assets
 */
import { EyeClosedIcon, EyeIcon } from "lucide-react";

/**
 * types
 */
type InputPasswordProps = Omit<React.ComponentProps<"input">, "type">;

export const InputPassword = ({ className, ...props }: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn(
          "pe-12 placeholder:tracking-normal",
          !showPassword && "tracking-widest",
          className,
        )}
        {...props}
      />

      <Toggle
        type="button"
        pressed={showPassword}
        onPressedChange={setShowPassword}
        className="absolute top-1/2 -translate-y-1/2 right-0.5 size-8"
      >
        {showPassword ? <EyeClosedIcon /> : <EyeIcon />}
      </Toggle>
    </div>
  );
};
