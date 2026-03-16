import { About } from "../components/layout/about";
import { CTA } from "../components/layout/cta";
import { FAQ } from "../components/layout/faq";
import { Footer } from "../components/layout/footer";
import { Hero } from "../components/layout/hero";
import { Navigation } from "../components/layout/navigation";
import { Projects } from "../components/layout/projects";
import { Stack } from "../components/layout/stack";
import { CodeParticles } from "../components/ui/code-particles";

export default function Page() {
  return (
    <div className="min-h-screen bg-black relative">
      <CodeParticles />
      <Navigation />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
