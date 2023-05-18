import React, { useEffect, useState } from "react";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function GameOver({
    score,
    setCurrentCategory,
    setCurrentQuestion,
    setScore,
    setTimeRemaining,
    setTimerActive,
    setUpdateTimer
}) {
    const [initial, setInitial] = useState(0);
    const [fullInitials, setFullInitials] = useState([]);
    const [clearIntervalID, setClearIntervalID] = useState(0);
    const [removeBlink, setRemoveBlink] = useState();
    const [newHighScore, setNewHighScore] = useState(false);

    useEffect(() => {
        if (newHighScore) {
            if (initial > 0) {
                clearInterval(clearIntervalID);
                removeBlink.classList.remove('blink');
            }
            if (initial < 3) {
                let cursor = document.querySelector(`.initials :nth-child(${initial + 1})`);
                setRemoveBlink(cursor);
                let interval = setInterval(() => cursor.classList.toggle("blink"), 400);
                setClearIntervalID(interval);
            }
        }
    }, [initial]);

    return (
        <div>
            <h2 className="results">
                You scored {score} points!
            </h2>
            {score > 2000 ?
                <div>
                    <p className="results">
                        New high score!
                    </p>
                    <div className="initials centered">
                        <div className={initial === 0 ? "blink" : ""}>{fullInitials[0]}</div>
                        <div>{fullInitials[1]}</div>
                        <div>{fullInitials[2]}</div>
                    </div>
                    <h2 className="results">
                        Please enter your initials:
                    </h2>
                    <div className="btnDiv centered">
                        {letters.map((letter, index) => <button
                            className="charBtn"
                            key={index}
                            onClick={() => {
                                if (initial <= 2) {
                                    setFullInitials([...fullInitials, letter]);
                                    setInitial(initial + 1)
                                }
                            }}
                        >
                            {letter}
                        </button>)}
                    </div>
                </div>
                :
                <div className="playAgainPrompt centered">
                    <h2>Would you like to play again?</h2>
                    <div className="promptButtons">
                        <button
                            className="charBtn"
                            onClick={() => {
                                setCurrentQuestion(0);
                                setCurrentCategory("quiz");
                                setScore(0);
                                // Set the timer here
                                setTimeRemaining(10);
                                setTimerActive(true);
                                setTimeout(() => {
                                    // If there is time remaining, the timer will be updated every second                
                                    setUpdateTimer(true);
                                }, 1000);
                            }
                            }
                        >
                            Y
                        </button>
                        <div className="btnBetween">/</div>
                        <button className="charBtn">N</button>
                    </div>
                </div>}
        </div>
    )
}

export default GameOver;