export const metadata = {
  title: "McKinsly - Take back your time",
  description: "",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Teams from "@/components/teams";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Teams />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
