import React from "react";
import Navbar from "../../components/navbar/Navbar";
import FilterSection from "./components/FilterSection";
import OngsDestaqueSection from "./components/OngsDestaqueSection/OngsDestaqueSection"

const Home = () => {
    return (
        <>
            <Navbar />
            <FilterSection />
            <OngsDestaqueSection />
        </>
    )
}

export default Home;