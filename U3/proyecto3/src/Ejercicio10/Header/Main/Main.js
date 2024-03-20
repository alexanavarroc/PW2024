import About from "./About/About";
import WhyUs from "./WhyUs/WhyUs";
import StatsCount from "./StatsCount/StatsCount";
import MenuSection from "./MenuSection/MenuSection";
export default function Main(){
    return <main id="main">{<>
    <About/>
    <WhyUs/>

<StatsCount />

<MenuSection />
    </>}</main>;

}