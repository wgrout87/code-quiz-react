import React from "react";

function Instructions({ setCurrentCategory, setVisibility }) {
    return (
        <>
            <div class="quiz" id="quiz">
                <h2>QUIZ EXPLANATION:</h2>
                <p>
                    YOU WILL BE GIVEN 3 MINUTES TO ANSWER 15 QUESTIONS. INCORRECT ANSWERS WILL DEDUCT 10 SECONDS
                    FROM YOUR REMAINING TIME. CORRECTLY ANSWERING QUESTIONS QUICKLY WILL BUILD A COMBO THAT WILL
                    BOOST THE POINTS YOU RECEIVE FOR EACH CORRECT ANSWER. ANY REMAINING TIME AFTER ALL QUESTIONS
                    HAVE BEEN ANSWERED WILL BE CONVERTED TO ADDITIONAL POINTS.
                </p>
            </div>
            <div class="beginBtn" id="beginBtn">
                <button
                    type="button"
                    onClick={() => {
                        setCurrentCategory('quiz');
                        setVisibility(1);
                    }
                    }
                >
                    TAKE THE QUIZ
                </button>
            </div>
        </>
    )
}

export default Instructions;