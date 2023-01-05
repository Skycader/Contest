const emptyScoreStamp = {
  offset: 0,
  score: {
    home: 0,
    away: 0
  }
};

export const scoreStamps = Array(50000).fill(emptyScoreStamp).map(
  (acc => () => {
    const scoreChanged = Math.random() > 0.9999;
    const homeScoreChange = scoreChanged && Math.random() > 0.55 ? 1 : 0;
    const awayScoreChange = scoreChanged && !homeScoreChange ? 1 : 0;
    return {
      offset: acc.offset += Math.floor(Math.random() * 3) + 1,
      score: {
        home: acc.score.home += homeScoreChange,
        away: acc.score.away += awayScoreChange
      }
    };
  }
  )(emptyScoreStamp)
);

export const getScore = (offset: number): { home: number, away: number } => {
//Using binary search
  let left = 0;
  let right = scoreStamps.length - 1;
  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    if (scoreStamps[middle].offset === offset)
      return scoreStamps[middle].score;
    if (offset > scoreStamps[middle].offset)
      left = middle + 1;
    else
      right = middle - 1;
  }
  throw new Error('No such offset');
}
