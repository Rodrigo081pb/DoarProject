import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FilterSection from "./components/FilterSection/FilterSection";
import OngsDestaqueSection from "./components/OngsDestaqueSection/OngsDestaqueSection"
import HelpSection from "./components/CanHelpSection/HelpSection"
import DifferenceSection from "./components/DifferenceSection/DifferenceSection"
import Footer from "../../components/footer/Footer";
import CategoriesSection from "../Home/components/CategoriesSection/CategoriesSection"

const Home = () => {
    return (
        <>
            <Navbar />
            <FilterSection />
            <CategoriesSection />
            <OngsDestaqueSection />
            <HelpSection />
            <DifferenceSection />
            <Footer />
        </>
    )
}

export default Home;