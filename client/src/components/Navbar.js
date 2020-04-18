import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useWhiteMode } from "../hooks/useWhiteMode";

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    const [whiteMode, setWhiteMode] = useWhiteMode(false);
    const toggleWhite = e => {
        e.preventDefault();
        setWhiteMode(!whiteMode);
    };

    return (
        <nav className="navbar">
            <h1>Women's World Cup</h1>
            <div className="dark-mode__toggle">
                <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle-dark toggled' : 'toggle-dark'}
                />
            </div>
            <div className="white-mode__toggle">
                <div
                    onClick={toggleWhite}
                    className={whiteMode ? 'toggle-white toggled' : 'toggle-white'}
                />
            </div>
        </nav>
    );
};
export default Navbar;
