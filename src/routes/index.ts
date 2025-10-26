/**
 * node modules
 */
import { createBrowserRouter } from "react-router";

/**
 * loaders
 */
import refreshTokenLoader from "@/routes/loaders/refreshToken";

/**
 * pages
 */
import { Login } from "@/pages/auth/Login";
import { Signup } from "@/pages/auth/Signup";
import { RootLayout } from "@/components/layouts/Root";

/**
 * actions
 */
import signupAction from "@/routes/actions/auth/signup";
import loginAction from "@/routes/actions/auth/login";
import settingsAction from "@/routes/actions/user/settings";

/**
 * error boundaries
 */

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
    action: loginAction,
  },
  {
    path: "/signup",
    Component: Signup,
    action: signupAction,
  },
  {
    path: "/refresh-token",
    loader: refreshTokenLoader,
  },
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
      },
      {
        path: "blogs",
      },
      {
        path: "blogs/:slug",
      },
    ],
  },
  {
    path: "/admin",
    children: [
      {
        path: "dashboard",
      },
      {
        path: "blogs",
      },
      {
        path: "blogs/create",
      },
      {
        path: "blogs/:slug/edit",
      },
      {
        path: "comments",
      },
      {
        path: "users",
      },
    ],
  },
  {
    path: "/settings",
    action: settingsAction,
  },
]);

export default router;
