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
  let l = 0;
  let r = scoreStamps.length - 1;
  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);
    if (scoreStamps[m].offset === offset)
      return scoreStamps[m].score;
    if (offset > scoreStamps[m].offset)
      l = m + 1;
    else
      r = m - 1;
  }
  throw new Error('Offset not found');
}
