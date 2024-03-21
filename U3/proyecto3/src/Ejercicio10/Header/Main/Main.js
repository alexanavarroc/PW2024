import About from "./About/About";
import WhyUs from "./WhyUs/WhyUs";
import StatsCount from "./StatsCount/StatsCount";
import MenuSection from "./MenuSection/MenuSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import EventSection from "./EventSection/EventSection";
import ChefSection from "./ChefSection/ChefSection";
import BookTable from "./BookTable/BookTable";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
export default function Main(){
    return (<main id="main">
        {
        <>
    <About/>
    <WhyUs/>
    <StatsCount />
    <MenuSection />
    <TestimonialSection />
    <EventSection />
    <ChefSection />
    <BookTable />
    <Gallery />
    <Contact />


    </>
    }
    </main>);

}