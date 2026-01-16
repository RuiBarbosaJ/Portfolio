import { About } from "../components/layout/about";
import { CTA } from "../components/layout/cta";
import { FAQ } from "../components/layout/faq";
import { Footer } from "../components/layout/footer";
import { Hero } from "../components/layout/hero";
import { Navigation } from "../components/layout/navigation";
import { Objective } from "../components/layout/objective";
import { Projects } from "../components/layout/projects";
import { Stack } from "../components/layout/stack";

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Objective />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
