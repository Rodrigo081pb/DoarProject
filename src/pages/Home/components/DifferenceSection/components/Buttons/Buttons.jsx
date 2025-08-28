import React from "react";
import FindOngsButton from "./FindOngs/FindOngsButton";
import ImOngButton from "./ImOng/ImOng";

const Buttons = () => {
    return(
        <>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FindOngsButton />
                <ImOngButton/>
            </div>
        </>
    )
}

export default Buttons;