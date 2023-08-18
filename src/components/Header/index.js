import React from "react";
import { useSiteContext } from "../../utils/GlobalState";
import { UPDATE_CURRENTCATEGORY } from "../../utils/actions";

function Header() {
    const [state, dispatch] = useSiteContext();

    return (
        <header data-testid="header">
            <h1 className="pageTitle">TIMED CODE QUIZ</h1>
            <div className="highScore">
                <p>CURRENT HIGH SCORE</p>
                <div className="record">
                    {/* If there are no saved high scores, highestScoreValues will return an object with null values for the fullInitials and score properties */}
                    <p id="highScoreInitials">{state.highestScoreValues().fullInitials ?? '---'}</p>
                    <p id="highScorePoints">{state.highestScoreValues().score ?? '-'}</p>
                </div>
                {/* Takes the user to the high scores screen */}
                <button
                    id="viewTheScoreboard"
                    onClick={() => {
                        dispatch({
                            type: UPDATE_CURRENTCATEGORY,
                            currentCategory: "highScores"
                        })
                    }
                    }
                    data-testid="viewScoreboard"
                >
                    VIEW THE SCOREBOARD
                </button>
            </div>
        </header>
    )
}

export default Header;