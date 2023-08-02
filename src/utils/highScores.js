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

    if (highScoresArray.length === 0) {
        results.newHighScore = true;
        results.positionInArray = 0;
    };

    if (highScoresArray.length < 10 && highScoresArray.length > 0) {
        results.newHighScore = true;
        // !!! determine if currentScore is greater than a score in the highScoresArray
    };

    return results;
}