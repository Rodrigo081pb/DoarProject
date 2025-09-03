import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../logo/Logo";
import { useNavigate } from 'react-router-dom';
import Switch from "../buttonTheme/ButtonTheme";
import BaseButton from '../BaseButton';
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    // Função para scroll suave até HelpSection
    const scrollToHelpSection = () => {
        const helpSection = document.getElementById('help-section');
        if (helpSection) {
            helpSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Se não está na Home, navega para Home e scroll depois
            navigate('/', { state: { scrollTo: 'help-section' } });
        }
    };

    return (
        <nav className="bg-white/95 dark:bg-black/80 shadow-md fixed w-full top-0 left-0 z-30 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}> 
                        <Logo />
                    </div>

                    <div className="hidden md:flex space-x-6 items-center">
                        <span className="hover:text-gray-300 text-gray-900 dark:text-white cursor-pointer" onClick={() => navigate('/')}>Home</span>
                        <span className="hover:text-gray-300 text-gray-900 dark:text-white cursor-pointer" onClick={scrollToHelpSection}>Sobre</span>
                        <span className="hover:text-gray-300 text-gray-900 dark:text-white cursor-pointer" onClick={() => navigate('/login')}>Sou ONG</span>

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
                    <span className="block w-full px-4 py-2 hover:bg-blue-700 cursor-pointer" onClick={() => { setOpen(false); navigate('/'); }}>Home</span>
                    <span className="block w-full px-4 py-2 hover:bg-blue-700 cursor-pointer" onClick={() => { setOpen(false); scrollToHelpSection(); }}>Sobre</span>
                    <span className="block w-full px-4 py-2 hover:bg-blue-700 cursor-pointer" onClick={() => { setOpen(false); navigate('/login'); }}>Sou ONG</span>
                </div>
            )}
        </nav>
    );
}
