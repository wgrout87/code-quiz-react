import React from "react";
import { useSiteContext } from "../../utils/GlobalState";

// This element is the box above the QuizSpace that displays the score while a quiz is ongoing
function CurrentScore() {
    const [state] = useSiteContext();
    return (
        // This element begins with visibility of zero - only displays during an ongoing quiz
        <div className="score transition" id="score" style={{ opacity: state.visibility }}>
            <p>CURRENT SCORE:</p>
            {/* score is dynamically displayed */}
            <p id="currentScore">{state.score}</p>
        </div>
    )
};

export default CurrentScore;