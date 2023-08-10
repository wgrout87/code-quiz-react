const HIGHSCORES = 'HIGHSCORES';

export function retrieveHighScores() {
    return localStorage.getItem(HIGHSCORES) ?? [
        { initials: 'WTG', score: 2000 }
    ];
}

export function determineNewHighScore(highScoresArray, currentScore) {
    let results = {
        newHighScore: false,
        positionInArray: null
    };
    let i = 0;

    while (i < highScoresArray.length && !results.newHighScore) {
        if (currentScore > highScoresArray[i] || highScoresArray[i] === null) {
            results.newHighScore = true;
            results.positionInArray = i;
        }
        i++;
    }

    return results;
}