import { questions } from "../questions";
import { retrieveHighScores } from "./highScores";

export const defaultSettings = {
    // questions includes all available questions found in questions.js in the src folder
    questions: questions,
    // quizQuestions begins as an empty array so that it can be filled with randomized questions from those available
    quizQuestions: [],
    // This function returns an array of all possible answers for the current question in a randomized order
    randomizeAnswers: function() {
        const answersArr = [];
        const questionAnswersOrder = [];
        while (questionAnswersOrder.length < 4) {
            let possibleQuestion = Math.floor(Math.random() * 4);

            // This if statement ensures that no values are repeated in the questionAnswersOrder array
            if (questionAnswersOrder.indexOf(possibleQuestion) === -1) {
                questionAnswersOrder.push(possibleQuestion);
            }
        }
        questionAnswersOrder.forEach(element => {
            answersArr.push(this.questions[this.quizQuestions[this.currentQuestion]].answers[element])
        })
        return answersArr
    }, 
    // currentCategory is used to determine which components display at any given time
    currentCategory: 'instructions',
    // visibility is initially set to zero for the game elements that appear only when a quiz is in progress
    visibility: 0,
    // timeRemaining is the total time left for the quiz
    timeRemaining: 180,
    // timerActive is used to control whether or not the timer is running
    timerActive: false,
    // timerBarWidth is used to shrink the timerBar component as a visual indicator of the combo duration
    timerBarWidth: '100.00%',
    // timeLeft is the time left to maintain a combo
    timeLeft: 15,
    // combo, pointsMultiplier, and score are all self explanatory
    combo: 0,
    pointsMultiplier: 1,
    score: 0,
    // correctAnswerGiven is typically set to true, but briefly is set to false for the incorrect answer logic elsewhere
    correctAnswerGiven: true,
    // updateTimer determines whether or not the quiz timer is running
    updateTimer: false,
    // timerBarKey is used to provide a key for the timer bar. This variable is incremented every time the timer bar resets in order to avoid a gradual reset from the one second transition duration
    timerBarKey: 0,
    // currentQuestion tracks the position in the quizQuestions array
    currentQuestion: 0,
    // fullInitials is used to store the user's input if a high score is achieved.
    fullInitials: [],
    // timerBarActive determines whether the timer bar is shrinking or not
    timerBarActive: false,
    // a function for reseting the timer bar that will also update the Global State
    resetTimerBar: function (time) {
        this.timeLeft = time;
        this.timerBarWidth = '100.00%';
    },
    // highScores uses the retrieveHighScores() function to retrieve all saved high scores for comparison with the user's results
    highScores: retrieveHighScores(),
    highestScoreValues: function () {
        return this.highScores[0] ?? {fullInitials: null, score: null};
    }
}