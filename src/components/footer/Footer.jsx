import React from "react";
import Logo from "../logo/Logo";
import TopFooter from "./components/TopFooter/TopFooter";
import Copyright from "./components/Copyright/Copyright";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200 pt-10 pb-6 px-4 md:px-8 lg:px-16 animate-fade-up">
            <TopFooter />
            <Copyright />
        </footer>
    );
}

export default Footer;
