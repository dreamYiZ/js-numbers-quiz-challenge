//  write by ZhiHu network friends.


// add dynamic programming

const main = (inputNum: number): number => {
	const str = inputNum.toString()
	const n = str.length
	const dp: boolean[][] = []

	for (let i = 0; i < n; ++i) {
		dp[i] = []
		for (let j = 0; j < n; ++j) {
			dp[i][j] = true
		}
	}

	const palindromes = new Set < string > ()

	for (let i = n - 1; i >= 0; --i) {
		for (let j = i + 1; j < n; ++j) {
			dp[i][j] = str[i] == str[j] && dp[i + 1][j - 1]

			if (dp[i][j] && str[i] !== '0') {
				palindromes.add(str.substring(i, j + 1))
			}
		}
	}

	for (let i = 0; i < n; ++i) {
		palindromes.add(str[i])
	}

	const nums = Array.from(palindromes).sort()

	return +nums.reverse().join('')
}

// console.log(main(13211) === 32111)

// console.log(main(12131) === 321311211)


module.exports = main;
