import React from "react";
import Logo from "../logo/Logo";
import TopFooter from "./components/TopFooter/TopFooter";
import Copyright from "./components/Copyright/Copyright";

import { useInView } from "../../hooks/useInView";

const Footer = () => {
    const [footerRef, isVisible] = useInView({ threshold: 0.2 });

    return (
        <footer
            ref={footerRef}
            className={`bg-slate-900 text-slate-200 pt-10 pb-6 px-4 md:px-8 lg:px-16 ${isVisible ? "animate-slide-in-blur-bottom" : "opacity-0"}`}
        >
            <TopFooter />
            <Copyright />
        </footer>
    );
}

export default Footer;
