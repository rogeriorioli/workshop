import Image from "next/image";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Details />
      <Footer />
    </main>
  );
}
