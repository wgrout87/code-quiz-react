import React from "react";

function Header() {
    return (
        <header>
            <h1 className="pageTitle">TIMED CODE QUIZ</h1>
            <div className="highScore">
                <p>CURRENT HIGH SCORE</p>
                <div className="record">
                    <p id="highScoreInitials"></p>
                    <p id="highScorePoints"></p>
                </div>
                <button id="viewTheScoreboard">
                    VIEW THE SCOREBOARD
                </button>
            </div>
        </header>
    )
}

export default Header;