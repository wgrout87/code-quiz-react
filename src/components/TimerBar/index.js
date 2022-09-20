import React, { useState, useEffect } from "react";

function TimerBar({ visibility, timerBarActive }) {
    const [timerBarWidth, setTimerBarWidth] = useState('100.00%');
    const [timeLeft, setTimeLeft] = useState(15);

    function decreaseTimerBarWidth(time) {
        let widthValue = parseFloat(timerBarWidth).toPrecision(4);
        widthValue -= 6.66;
        if (time > 0) {
            setTimerBarWidth(widthValue.toPrecision(4) + '%');
        };
        if (time === 1) {
            setTimerBarWidth('0%');
        };
    };

    useEffect(() => {
        if (timerBarActive) {
            decreaseTimerBarWidth(timeLeft);
            const timer = setTimeout(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1);
                };
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [timerBarActive, timeLeft]);

    return (
        <div id="timerBar" style={{ opacity: visibility, width: timerBarWidth }}></div>
    )
}

export default TimerBar;