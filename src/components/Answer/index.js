import React from "react";
import { UPDATE_TIMEREMAINING, UPDATE_COMBO, UPDATE_POINTSMULTIPLIER, UPDATE_SCORE, UPDATE_CORRECTANSWERGIVEN, UPDATE_TIMERBARKEY } from "../../utils/actions";
import { useSiteContext } from "../../utils/GlobalState";

function Answer({
    answer,
    answerCorrect,
    currentQuestion,
    setCurrentQuestion,
    resetTimerBar,
    setTimerBarActive,
}) {
    const [state, dispatch] = useSiteContext();
    return (
        <button
            data-index={0}
            className="questionAnswer"
            onClick={(e) => {
                dispatch({
                    type: UPDATE_TIMERBARKEY,
                    timerBarKey: state.timerBarKey + 1
                })
                if (answerCorrect) {
                    setCurrentQuestion(currentQuestion + 1);
                    setTimerBarActive(true);
                    dispatch({
                        type: UPDATE_COMBO,
                        combo: state.combo + 1,
                    });
                    dispatch({
                        type: UPDATE_POINTSMULTIPLIER,
                        pointsMultiplier: state.pointsMultiplier + .1,
                    });
                    dispatch({
                        type: UPDATE_SCORE,
                        score: state.score + (1000 * state.pointsMultiplier),
                    });
                    resetTimerBar(15);
                } else {
                    dispatch({
                        type: UPDATE_TIMEREMAINING,
                        timeRemaining: Math.max(0, (state.timeRemaining - 10)),
                    });
                    setTimerBarActive(false);
                    dispatch({
                        type: UPDATE_COMBO,
                        combo: 0,
                    });
                    dispatch({
                        type: UPDATE_POINTSMULTIPLIER,
                        pointsMultiplier: 1,
                    });
                    resetTimerBar(0);
                    e.target.style.opacity = 0;
                    e.target.style.cursor = 'initial';
                    e.target.disabled = true;
                    dispatch({
                        type: UPDATE_CORRECTANSWERGIVEN,
                        correctAnswerGiven: false
                    });
                };
            }}
        >
            {answer}
        </button>
    )
}

export default Answer;