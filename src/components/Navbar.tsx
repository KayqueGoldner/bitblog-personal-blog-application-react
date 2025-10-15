/**
 * node modules
 */
import { NavLink } from "react-router";

/**
 * components
 */
import { Button } from "@/components/ui/button";

/**
 * constants
 */
const NAV_LINKS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/blogs",
    label: "Blogs",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
] as const;

export const Navbar = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => {
  return (
    <nav className={className} aria-label="Primary navigation" {...props}>
      <ul className="flex flex-col gap-y-2 gap-x-1 md:flex-row md:items-center">
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Button
              variant="ghost"
              className="max-md:w-full max-md:justify-start"
              asChild
            >
              <NavLink to={href} className="nav-link" viewTransition>
                {label}
              </NavLink>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
