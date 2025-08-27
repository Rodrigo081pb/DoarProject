import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FilterSection from "./components/FilterSection/FilterSection";
import OngsDestaqueSection from "./components/OngsDestaqueSection/OngsDestaqueSection"
import HelpSection from "./components/CanHelpSection/HelpSection"

const Home = () => {
    return (
        <>
            <Navbar />
            <FilterSection />
            <OngsDestaqueSection />
            <HelpSection />
        </>
    )
}

export default Home;