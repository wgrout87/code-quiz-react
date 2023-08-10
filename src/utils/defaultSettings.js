import { questions } from "../questions";

export const defaultSettings = {
    questions: questions,
    quizQuestions: [],
    currentCategory: 'instructions',
    visibility: 0,
    timeRemaining: 10,
    timerActive: false,
    timerBarWidth: '100.00%',
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
    highScores: []
}