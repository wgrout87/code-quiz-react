import React from "react";
import { useSiteContext } from "../../utils/GlobalState";
import { BEGIN_QUIZ } from "../../utils/actions"

function Instructions() {
    const [state, dispatch] = useSiteContext();

    return (
        <>
            <div>
                <h2>QUIZ EXPLANATION:</h2>
                <p>
                    YOU WILL BE GIVEN 3 MINUTES TO ANSWER 15 QUESTIONS. INCORRECT ANSWERS WILL DEDUCT 10 SECONDS
                    FROM YOUR REMAINING TIME. CORRECTLY ANSWERING QUESTIONS QUICKLY WILL BUILD A COMBO THAT WILL
                    BOOST THE POINTS YOU RECEIVE FOR EACH CORRECT ANSWER. ANY REMAINING TIME AFTER ALL QUESTIONS
                    HAVE BEEN ANSWERED WILL BE CONVERTED TO ADDITIONAL POINTS.
                </p>
            </div>
            <div className="beginBtn" id="beginBtn">
                <button
                    type="button"
                    onClick={() => {
                        dispatch({
                            type: BEGIN_QUIZ,
                            currentCategory: "quiz",
                            visibility: 1,
                            timerActive: true,
                        });
                    }}
                >
                    TAKE THE QUIZ
                </button>
            </div>
        </>
    )
}

export default Instructions;