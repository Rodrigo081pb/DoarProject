import React from "react";
import { useInView } from "../../../../hooks/useInView";
import CtaDifference from "./components/CtaDifference/CtaDifference";
import Buttons from "./components/Buttons/Buttons";

const DifferenceSection = () => {
    const [sectionRef, isVisible] = useInView({ threshold: 0.2 });
    return(
        <section
            ref={sectionRef}
            className={`py-20 bg-white ${isVisible ? "animate-slide-in-blur-bottom" : "opacity-0"}`}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <CtaDifference/>
                <Buttons/>
            </div>
        </section>
    )
}

export default DifferenceSection;


