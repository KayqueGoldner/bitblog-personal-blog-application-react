/**
 * node modules
 */
import { bitblogApi } from "@/api";

/**
 * types
 */
import type { ActionFunction } from "react-router";
import { AxiosError } from "axios";
import type { ActionResponse, AuthResponse } from "@/types";

const loginAction: ActionFunction = async ({ request }) => {
  const data = await request.json();

  try {
    const response = await bitblogApi.post("/auth/login", data, {
      withCredentials: true,
    });
    const responseData = response.data as AuthResponse;

    localStorage.setItem("accessToken", responseData.accessToken);
    localStorage.setItem("user", JSON.stringify(responseData.user));

    return {
      ok: true,
      data: responseData,
    } as ActionResponse<AuthResponse>;
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        ok: false,
        err: error.response?.data,
      } as ActionResponse;
    }

    throw error;
  }
};

export default loginAction;
