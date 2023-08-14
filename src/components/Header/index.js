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
                    <p id="highScoreInitials">{state.highScores[0].fullInitials ?? '---'}</p>
                    <p id="highScorePoints">{state.highScores[0].score ?? '-'}</p>
                </div>
                <button id="viewTheScoreboard">
                    VIEW THE SCOREBOARD
                </button>
            </div>
        </header>
    )
}

export default Header;