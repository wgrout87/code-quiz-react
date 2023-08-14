import { questions } from "../questions";
import { retrieveHighScores } from "./highScores";

export const defaultSettings = {
    questions: questions,
    quizQuestions: [],
    currentCategory: 'instructions',
    visibility: 0,
    // timeRemaining is the total time left for the quiz
    timeRemaining: 20,
    timerActive: false,
    timerBarWidth: '100.00%',
    // timeLeft is the time left to maintain a combo
    timeLeft: 15,
    combo: 0,
    pointsMultiplier: 1,
    score: 0,
    correctAnswerGiven: true,
    updateTimer: false,
    timerBarKey: 0,
    currentQuestion: 0,
    fullInitials: [],
    timerBarActive: false,
    resetTimerBar: function (time) {
        this.timeLeft = time;
        this.timerBarWidth = '100.00%';
    },
    highScores: retrieveHighScores()
}