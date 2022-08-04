//  write by ZhiHu network friends.
// add dynamic programming
var main = function (inputNum) {
    var str = inputNum.toString();
    var n = str.length;
    var dp = [];
    for (var i = 0; i < n; ++i) {
        dp[i] = [];
        for (var j = 0; j < n; ++j) {
            dp[i][j] = true;
        }
    }
    var palindromes = new Set();
    for (var i = n - 1; i >= 0; --i) {
        for (var j = i + 1; j < n; ++j) {
            dp[i][j] = str[i] == str[j] && dp[i + 1][j - 1];
            if (dp[i][j] && str[i] !== '0') {
                palindromes.add(str.substring(i, j + 1));
            }
        }
    }
    for (var i = 0; i < n; ++i) {
        palindromes.add(str[i]);
    }
    var nums = Array.from(palindromes).sort(function (a, b) { return parseInt("".concat(b).concat(a)) - parseInt("".concat(a).concat(b)); });
    return +nums.join('');
};
// console.log(main(13211) === 32111)
// console.log(main(12131) === 321311211)
module.exports = main;
