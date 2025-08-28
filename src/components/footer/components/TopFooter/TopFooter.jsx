import React from "react";
import Logo from "../../../logo/Logo";
import LoginButton from "./Buttons/Login/LoginButton";
import RegisterButton from "./Buttons/Register/RegisterButton";

const TopFooter = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-700 pb-6">
            <div className="flex flex-col items-start text-left">
                <Logo />
            </div>
            <div className="flex gap-3">
                <RegisterButton />
                <LoginButton />
            </div>
        </div>
    )
}

export default TopFooter;