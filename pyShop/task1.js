"use strict";
exports.__esModule = true;
exports.getScore = exports.scoreStamps = void 0;
var emptyScoreStamp = {
    offset: 0,
    score: {
        home: 0,
        away: 0
    }
};
exports.scoreStamps = Array(50000).fill(emptyScoreStamp).map((function (acc) { return function () {
    var scoreChanged = Math.random() > 0.9999;
    var homeScoreChange = scoreChanged && Math.random() > 0.55 ? 1 : 0;
    var awayScoreChange = scoreChanged && !homeScoreChange ? 1 : 0;
    return {
        offset: acc.offset += Math.floor(Math.random() * 3) + 1,
        score: {
            home: acc.score.home += homeScoreChange,
            away: acc.score.away += awayScoreChange
        }
    };
}; })(emptyScoreStamp));
var getScore = function (offset) {
    //Using binary search
    var left = 0;
    var right = exports.scoreStamps.length - 1;
    while (left <= right) {
        var middle = Math.floor(left + (right - left) / 2);
        if (exports.scoreStamps[middle].offset === offset)
            return exports.scoreStamps[middle].score;
        if (offset > exports.scoreStamps[middle].offset)
            left = middle + 1;
        else
            right = middle - 1;
    }
    throw new Error('No such offset');
};
exports.getScore = getScore;
