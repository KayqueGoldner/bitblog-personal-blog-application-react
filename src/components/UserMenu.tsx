/**
 * node modules
 */
import { Link } from "react-router";

/**
 * components
 */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Avatar from "react-avatar";
import { SettingsDialog } from "@/components/SettingsDialog";

/**
 * custom hooks
 */
import { useUser } from "@/hooks/useUser";
import { useLogout } from "@/hooks/useLogout";

/**
 * assets
 */
import { LayoutDashboardIcon, LogOutIcon, SettingsIcon } from "lucide-react";

export const UserMenu = () => {
  const user = useUser();
  const logout = useLogout();

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Avatar email={user.email} size="28" className="rounded-sm" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-56" align="end">
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar email={user.email} size="32" className="rounded-lg" />

              <div className="grid flex-1 text-left text-sm leading-tight">
                <div className="truncate font-medium">{user.username}</div>
                <div className="truncate text-xs">{user.email}</div>
              </div>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            {user.role === "admin" && (
              <DropdownMenuItem asChild>
                <Link to="/admin/dashboard" viewTransition>
                  <LayoutDashboardIcon />
                  Dashboard
                </Link>
              </DropdownMenuItem>
            )}

            <SettingsDialog>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
            </SettingsDialog>
            <DropdownMenuItem onClick={logout}>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};
