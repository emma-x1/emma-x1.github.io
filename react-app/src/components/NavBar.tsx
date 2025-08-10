import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// import { useLengthMode } from '../contexts/LengthModeContext';

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    // const { isLong, toggleLengthMode } = useLengthMode();

    return (
        <nav className="nav-bar">
            <div className="nav-bar-left">
                <a href="/" className="nav-bar-logo">emma xing</a>
            </div>

            <button
                className="nav-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                ☰
            </button>

            <div className="nav-bar-right desktop-menu">
                <a href="#intro">Intro</a>
                <a href="#professional">Professional</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                {/* <button onClick={toggleLengthMode}>
                    {isLong ? "Short Mode" : "Long Mode"}
                </button>
 */}
                {/* <Link to="/thoughts">thoughts</Link>
                <Link to="/trinkets">trinkets</Link> */}
            </div>

            {menuOpen && (
                <div className="mobile-menu">
                <a href="#intro" onClick={() => setMenuOpen(false)}>Intro</a>
                <a href="#professional" onClick={() => setMenuOpen(false)}>Professional</a>
                <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                {/* <button onClick={toggleLengthMode}>
                    {isLong ? "Short Mode" : "Long Mode"}
                </button> */}
                </div>
            )}

        </nav>
    );
}