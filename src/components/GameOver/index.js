import React, { useState } from "react";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function GameOver({
    score,
    scoreResults,
    setScoreResults,
}) {
    const [initial, setInitial] = useState(0);
    const [btnPress, setBtnPress] = useState("");

    return (
        <>
            <h2 className="results">
                You scored {score} points!
            </h2>
            <p className="results">
                {scoreResults}
            </p>
            <div className="initials centered">
                <div>{btnPress}</div>
                <div>{btnPress}</div>
                <div>{btnPress}</div>
            </div>
            <h2 className="results">
                Please enter your initials:
            </h2>
            <div className="btnDiv centered">
                {letters.map((letter, index) => <button
                    className="charBtn"
                    key={index}
                    onClick={() => {
                        setBtnPress(letter);
                        if (initial <= 2) {
                            setInitial(initial + 1)
                        }
                    }}
                >
                    {letter}
                </button>)}
            </div>
        </>
    )
}

export default GameOver;