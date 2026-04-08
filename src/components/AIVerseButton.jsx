import "../styles/AIVerseButton.css";
import AI_VERSE_LOGO from "../assets/imgs/ai-verse.png"

function AIVerseButton() {
    return (
        <div className="ai-verse">
            <a href="https://a-i-verse.netlify.app">
                <img src={AI_VERSE_LOGO} alt="AI Verse" />
                <p>AI Verse</p>
            </a>
        </div>
    )
}

export default AIVerseButton;