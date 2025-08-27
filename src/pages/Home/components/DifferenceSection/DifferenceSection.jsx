import React from "react";
import CtaDifference from "./components/CtaDifference/CtaDifference";
import Buttons from "./components/Buttons/Buttons";

const DifferenceSection = () => {
    return(
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <CtaDifference/>
                <Buttons/>
            </div>
        </section>
    )
}

export default DifferenceSection;


