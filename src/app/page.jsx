import Hero from "./component/home_component/hero";
import NavBar from "./component/navbar";
import "./main-style.css";
import Showreel from "./component/home_component/showreel";
import PartnersAndBrands from "./component/home_component/partner-and-brands";
import Footer from "./component/home_component/home-footer";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Showreel/>
      <PartnersAndBrands/>
      <Footer/>
    </main>
  );
}
