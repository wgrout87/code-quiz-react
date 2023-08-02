const HIGHSCORES = 'HIGHSCORES';

export function retrieveHighScores () {
    return localStorage.getItem(HIGHSCORES) ?? [{initials: 'WTG', score: 2000}];
}