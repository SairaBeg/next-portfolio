import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <Hero />
        <About />
      </div>
    </main>
  );
}
