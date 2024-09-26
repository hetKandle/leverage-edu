import Achievement from "@/components/Achievement";
import Advantage from "@/components/Advantage";
import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import University from "@/components/University";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Achievement />
      <Advantage />
      <University />
      <Testimonials />
      <Description />
      <Footer />
    </>
  );
}
