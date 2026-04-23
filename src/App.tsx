import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import Sectors from "./components/sections/Sectors";
import WhyUs from "./components/sections/WhyUs";
import Allies from "./components/sections/Allies";
import Contact from "./components/sections/Contact";
import WhatsAppButton from "./components/ui/WhatsAppButton";

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <main>

      <Navbar />
      <Hero />
      <Products />
      <Sectors />
      <WhyUs />
      <Allies />
      <Contact />
      <Footer />
      <WhatsAppButton />

      </main>

    </div>
  );
}

export default App;