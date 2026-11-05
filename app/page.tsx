import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedVehicle from "@/components/showroom/FeaturedVehicle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="showroom">
      <Navbar/>
      <Hero/>
      <FeaturedVehicle/>
      <Footer/>
     
    </main>
  );
}