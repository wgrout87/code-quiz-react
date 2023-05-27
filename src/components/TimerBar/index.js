import React, { useState, useEffect } from "react";
import { useSiteContext } from "../../utils/GlobalState";
import { UPDATE_TIMELEFT, UPDATE_TIMERBARWIDTH } from "../../utils/actions";

function TimerBar({ timerBarActive }) {
    const [state, dispatch] = useSiteContext();

    function decreaseTimerBarWidth(time) {
        let widthValue = parseFloat(state.timerBarWidth).toPrecision(4);
        widthValue -= 6.66;
        if (time > 0) {
            dispatch({
                type: UPDATE_TIMERBARWIDTH,
                timerBarWidth: (widthValue.toPrecision(4) + '%'),
            });
        };
        if (time === 1) {
            dispatch({
                type: UPDATE_TIMERBARWIDTH,
                timerBarWidth: '0%',
            });
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
    }, [timerBarActive, state.timeLeft]);

    return (
        <div id="timerBar" className="transition" style={{ opacity: state.visibility, width: state.timerBarWidth }}></div>
    )
}

export default TimerBar;