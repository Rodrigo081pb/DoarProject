import React from "react";
import ImageBackgroundFilter from "./components/ImageBackgroundFilter";
import Filter from "./components/Filter";
import CtaFilterSection from "./components/CtaFilterSection";

const FilterSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <ImageBackgroundFilter />
            <div className="absolute inset-0 bg-purple-700/60 z-10"></div>
            <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen pt-2 pb-10">
                <CtaFilterSection />
                <Filter />
            </div>
        </section>
    );
};

export default FilterSection;