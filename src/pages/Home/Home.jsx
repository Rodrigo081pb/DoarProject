import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FilterSection from "./components/FilterSection/FilterSection";
import OngsDestaqueSection from "./components/OngsDestaqueSection/OngsDestaqueSection"
import HelpSection from "./components/CanHelpSection/HelpSection"
import DifferenceSection from "./components/DifferenceSection/DifferenceSection"

const Home = () => {
    return (
        <>
            <Navbar />
            <FilterSection />
            <OngsDestaqueSection />
            <HelpSection />
            <DifferenceSection />
        </>
    )
}

export default Home;