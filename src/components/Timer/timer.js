import React, { useEffect, useState } from "react";

export default function Timer({ timeRemaining }) {
    const [secondPassed, setSecondPassed] = useState(true);
    const [timerRunning, setTimerRunning] = useState(false);

    function countdown() {
        setSecondPassed(false);
        if (!timerRunning && timeRemaining > 0) {
            setTimerRunning(true);
            setTimeout(() => {
                setSecondPassed(true);
                setTimerRunning(false);
                countdown();
            }, 1000)
        }
    };

    useEffect(() => {
        if (secondPassed) {
            countdown();
        }
    }, [secondPassed])

    return (
        <div className="timeRemaining">
            <p>TIME REMAINING: <br /><span id="timeRemaining">{timeRemaining}</span>
            </p>
        </div>
    )
}