import React, { useState, useEffect } from "react";
import { useSiteContext } from "../../utils/GlobalState";

function TimerBar({ timerBarActive, timerBarWidth, setTimerBarWidth, timeLeft, setTimeLeft }) {
    const [state, dispatch] = useSiteContext();

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
        <div id="timerBar" className="transition" style={{ opacity: state.visibility, width: timerBarWidth }}></div>
    )
}

export default TimerBar;