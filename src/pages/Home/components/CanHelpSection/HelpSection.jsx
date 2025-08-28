import React from "react";
import { useInView } from "../../../../hooks/useInView";
import MapBrasil from "./components/BrasilMap/MapBrasil";
import CtaHelp from "./components/CtaHelp/CtaHelp";

const HelpSection = () => {
    const [sectionRef, isVisible] = useInView({ threshold: 0.2 });
    return (
        <section
            ref={sectionRef}
            className={`py-7 mx-auto bg-indigo-600 ${isVisible ? "animate-slide-in-blur-bottom" : "opacity-0"}`}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex flex-col items-center justify-center gap-3">
                    <MapBrasil />
                    <CtaHelp />
                </div>
            </div>
        </section>
    );
};

export default HelpSection;