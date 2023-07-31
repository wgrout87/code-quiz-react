import React from "react";
import { useSiteContext } from "../../utils/GlobalState";

function Header() {
    const [state, dispatch] = useSiteContext();

    return (
        <header>
            <h1 className="pageTitle">TIMED CODE QUIZ</h1>
            <div className="highScore">
                <p>CURRENT HIGH SCORE</p>
                <div className="record">
                    <p id="highScoreInitials">{state.highScoreInitials ?? '---'}</p>
                    <p id="highScorePoints">{state.highScorePoints ?? '-'}</p>
                </div>
                <button id="viewTheScoreboard">
                    VIEW THE SCOREBOARD
                </button>
            </div>
        </header>
    )
}

export default Header;