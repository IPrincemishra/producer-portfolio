import React, { useEffect, useRef, useState } from 'react';
import OverlayMenu from "./OverlayMenu";
import LOGO from "../assets/logo.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [forceVisible, setForceVisible] = useState(false);

    const lastScrollY = useRef(0);

    // 🔹 Home section observer
    useEffect(() => {
        const homeSection = document.querySelector("#home");
        if (!homeSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setForceVisible(true);
                    setVisible(true);
                } else {
                    setForceVisible(false);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(homeSection);

        return () => observer.disconnect();
    }, []);

    // 🔹 Scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            // 🚫 Do nothing when menu is open
            if (menuOpen || forceVisible) {
                setVisible(true);
                return;
            }

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                // scrolling down
                setVisible(false);
            } else {
                // scrolling up
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen, forceVisible]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 
                transition-transform duration-300 backdrop-blur-md 
                ${visible ? "translate-y-0" : "-translate-y-full"}`}
            >
                {/* Logo */}
                <img src={LOGO} alt="logo" className="w-32" />

                {/* Menu Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open Menu"
                    aria-expanded={menuOpen}
                    className="lg:absolute lg:left-1/2 lg:-translate-x-1/2"
                >
                    <FiMenu className="text-white text-2xl" />
                </button>

                {/* CTA */}
                <div className="hidden lg:block">
                    <a
                        href="#contact"
                        className="bg-gradient-to-r  to-blue-500 px-4 py-1 rounded-2xl shadow-lg text-white"
                    >
                        Reach Out
                    </a>
                </div>
            </nav>

            <OverlayMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
            />
        </>
    );
};

export default Navbar;
