import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../logo/Logo";
import Switch from "../buttonTheme/ButtonTheme";
import BaseButton from '../BaseButton';
export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white/95 dark:bg-black/80 shadow-md fixed w-full top-0 left-0 z-30 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                        <a href="#" className="hover:text-gray-300 text-gray-900 dark:text-white">Home</a>
                        <a href="#" className="hover:text-gray-300 text-gray-900 dark:text-white">Sobre</a>
                        <a href="#" className="hover:text-gray-300 text-gray-900 dark:text-white">Sou ONG</a>
                        <a href="#" className="hover:text-gray-300 text-gray-900 dark:text-white">Contato</a>

                        <div className="ml-2 flex items-center h-full">
                            <div className="flex items-center justify-center h-full">
                                <Switch small />
                            </div>
                        </div>
                    </div>

                    {/* Botão Mobile + Switch */}
                    <div className="md:hidden flex items-center gap-2">
                        <Switch small />
                        <BaseButton onClick={() => setOpen(!open)} size="md" variant="secondary" className="p-2">
                            {open ? (
                                <HiX size={28} className="text-gray-900 dark:text-white" />
                            ) : (
                                <HiMenu size={28} className="text-gray-900 dark:text-white" />
                            )}
                        </BaseButton>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {open && (
                <div className="md:hidden bg-blue-400 flex flex-col items-center text-center">
                    <a href="#" className="block w-full px-4 py-2 hover:bg-blue-700">Home</a>
                    <a href="#" className="block w-full px-4 py-2 hover:bg-blue-700">Sobre</a>
                    <a href="#" className="block w-full px-4 py-2 hover:bg-blue-700">Serviços</a>
                    <a href="#" className="block w-full px-4 py-2 hover:bg-blue-700">Contato</a>
                </div>
            )}
        </nav>
    );
}
