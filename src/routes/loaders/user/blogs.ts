/**
 * node modules
 */
import { data } from "react-router";

/**
 * custom modules
 */
import { bitblogApi } from "@/api";

/**
 * types
 */
import type { LoaderFunction } from "react-router";
import { AxiosError } from "axios";
import type { Blog, PaginatedResponse } from "@/types";

const userBlogLoader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  try {
    const response = await bitblogApi.get("/blogs", {
      params: Object.fromEntries(url.searchParams),
    });
    const data = response.data as PaginatedResponse<Blog, "blogs">;

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw data(error.response?.data.message || error.message, {
        status: error.response?.status || error.status,
        statusText: error.response?.statusText || error.code,
      });
    }

    throw error;
  }
};

export default userBlogLoader;
