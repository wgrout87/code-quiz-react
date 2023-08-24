import React, { useEffect } from "react";
import { useSiteContext } from "../../utils/GlobalState";
import { UPDATE_TIMELEFT, UPDATE_TIMERBARWIDTH } from "../../utils/actions";

function TimerBar() {
    const [state, dispatch] = useSiteContext();

    function decreaseTimerBarWidth(time) {
        // widthValue determines the percentage value of the timer bar's width as stored in the Global State
        let widthValue = parseFloat(state.timerBarWidth).toPrecision(4);
        widthValue -= 6.66;
        // This if statement is the standard method for shrinking the timer bar
        if (time > 0) {
            dispatch({
                type: UPDATE_TIMERBARWIDTH,
                timerBarWidth: (widthValue + '%'),
            });
        };
        // This if statement will shrink the timer bar the last .01% as time approaches 0
        if (time === 1) {
            dispatch({
                type: UPDATE_TIMERBARWIDTH,
                timerBarWidth: '0%',
            });
        };
    };

    // This useEffect hook is used to shrink the timer bar while the timer bar is active and aslo runs the combo timer
    useEffect(() => {
        if (state.timerBarActive) {
            // the timer bar width decreases
            decreaseTimerBarWidth(state.timeLeft);
            // this timer refers to the time left to maintain a combo from correctly answering questions - the time is reset by the resetTimerBar function found in the defalutSettings.js file
            const timer = setTimeout(() => {
                // the timer will decrease to 0
                if (state.timeLeft > 0) {
                    dispatch({
                        type: UPDATE_TIMELEFT,
                        timeLeft: (state.timeLeft - 1),
                    });
                };
            }, 1000);

            // cleans up all timeouts
            return () => clearTimeout(timer);
        }
        // timerBarActive and timeLeft are used as dependencies to modify the timer bar while active and as time to maintain a combo decreases
    }, [state.timerBarActive, state.timeLeft]);

    return (
        <div id="timerBar" key={state.timerBarKey} className="transition" style={{ opacity: state.visibility, width: state.timerBarWidth }}></div>
    )
}

export default TimerBar;