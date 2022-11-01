import React, { useEffect, useState } from "react";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

function GameOver({
    score,
    scoreResults,
    setScoreResults,
}) {
    const [initial, setInitial] = useState(0);
    const [btnPress, setBtnPress] = useState("");
    const [fullInitials, setFullInitials] = useState([]);

    useEffect(() => {
        let initialsDisplay = document.querySelector(`.initials :nth-child(${initial + 1})`);
        console.log(initialsDisplay);
    }, [fullInitials]);

    return (
        <>
            <h2 className="results">
                You scored {score} points!
            </h2>
            <p className="results">
                {scoreResults}
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
                            setBtnPress(letter);
                            setFullInitials([...fullInitials, letter]);
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