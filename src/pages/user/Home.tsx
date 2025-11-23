/**
 * components
 */
import { Page } from "@/components/Page";
import { Hero } from "@/components/home/hero";
import { RecentBlogs } from "@/components/home/RecentBlogs";
import { AllBlogs } from "@/components/home/AllBlogs";

export const Home = () => {
  return (
    <Page>
      <Hero />

      <RecentBlogs />

      <AllBlogs />
    </Page>
  );
};
