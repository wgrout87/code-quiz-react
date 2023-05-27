import React, { useState, useEffect } from "react";
import { useSiteContext } from "../../utils/GlobalState";
import { UPDATE_TIMELEFT } from "../../utils/actions";

function TimerBar({ timerBarActive, timerBarWidth, setTimerBarWidth, timeLeft }) {
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
            decreaseTimerBarWidth(state.timeLeft);
            const timer = setTimeout(() => {
                if (state.timeLeft > 0) {
                    dispatch({
                        type: UPDATE_TIMELEFT,
                        timeLeft: (state.timeLeft - 1),
                    });
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