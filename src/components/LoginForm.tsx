/**
 * node modules
 */
import { Link, useFetcher, useNavigate } from "react-router";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";

/**
 * custom modules
 */
import { cn } from "@/lib/utils";

/**
 * components
 */
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputPassword } from "@/components/InputPassword";

/**
 * assets
 */
import { loginBanner } from "@/assets";
import { LoaderCircleIcon } from "lucide-react";

/**
 * types
 */
import type { ActionResponse, AuthResponse, ValidationError } from "@/types";
type LoginFieldName = "email" | "password";

/**
 * constants
 */
const LOGIN_FORM = {
  title: "Welcome back",
  description: "Sign in to your account",
  footerText: "Don't have an account?",
} as const;

/**
 * login form schema
 */
const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const navigate = useNavigate();
  const fetcher = useFetcher();
  const loginResponse = fetcher.data as ActionResponse<AuthResponse>;

  const isLoading = fetcher.state !== "idle";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof formSchema>) => {
      console.log(values);
    },
    [fetcher],
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-semibold">{LOGIN_FORM.title}</h1>

                  <p className="text-muted-foreground text-balance">
                    {LOGIN_FORM.description}
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <InputPassword
                          placeholder="Enter your password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading && <LoaderCircleIcon className="animate-spin" />}

                  <span>Login</span>
                </Button>
              </div>

              <div className="mt-4 text-center text-sm">
                {LOGIN_FORM.footerText}{" "}
                <Link
                  to="/signup"
                  className="underline underline-offset-4 hover:text-primary"
                  viewTransition
                >
                  Sign up
                </Link>
              </div>
            </form>
          </Form>

          <figure className="bg-muted relative hidden md:block">
            <img
              src={loginBanner}
              width={400}
              height={400}
              alt="Login Banner"
              className="absolute inset-0 size-full object-cover"
            />
          </figure>
        </CardContent>
      </Card>

      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{" "}
        <Link
          to="/terms"
          className="underline underline-offset-4 hover:text-primary"
          viewTransition
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          to="/privacy"
          className="underline underline-offset-4 hover:text-primary"
          viewTransition
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};
