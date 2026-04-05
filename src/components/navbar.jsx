import { useState, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";


export default function Navbar() {

    const [darkMode, setDarkMode] = useState(false);


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark");
            setDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        setDarkMode(isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    };

    return (
        <div className="navbar">
            <h1 className="logo">ToolVerse <img src={logo} alt="ToolVerse Logo" /></h1>

            <div className="nav-right">
                <input className="search" placeholder="Search tools..." />
                <button className="search-btn">Search</button>
                <button onClick={toggleTheme} className="theme-btn">
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>


        </div>



    );
}