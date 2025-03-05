import NavBar from "../../component/navbar";
import AboutHero from "../../component/about_component/about-hero";
import AboutPlayers from "../../component/about_component/about-players";
import AboutServices from "../../component/about_component/about-services";
import AboutFooter from "../../component/about_component/about-footer";

AboutHero
export default function About() {
    return (
        <main>
            <NavBar/>
            <AboutHero/>
            <AboutPlayers/>
            <AboutServices/>
            <AboutFooter/>
        </main>
    );
}