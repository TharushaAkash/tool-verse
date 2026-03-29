import "../styles/navbar.css";

export default function Navbar() {

    const toggleTheme = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <div className="navbar">
            <h1 className="logo">ToolVerse 🚀</h1>

            <div className="nav-right">
                <input className="search" placeholder="Search tools..." />
                <button className="search-btn">Search</button>
                <button onClick={toggleTheme} className="theme-btn">
                    🌙
                </button>
            </div>

        
        </div>



    );
}