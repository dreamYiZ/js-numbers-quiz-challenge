// 题 目：

// 输入正整数 a，将 a 分割成若干个整数，这些整数需要满足条件：正着读反着读都一样并且不重复，然后将这些整数拼接，返回拼接后最大的整数



// 示例1：

// 输入：a = 13211

// 输出：32111

// 解释：a 分割后满足条件的数组为 [1, 2, 3, 11]，数组中的元素拼接后的最大值为32111



// 示例2：

// 输入：a = 12131

// 输出：321311211

// 解释：a 分割后满足条件的数组为 [1, 2, 3, 121, 131]，数组中的元素拼接后的最大值为321311211

function main(inputNum) {

	// console.log('input:', inputNum)
	if (!Number.isInteger(inputNum)) {
		return inputNum;
	}

	const numString = inputNum.toString();

	const numArr = [];

	const findSymmetricalNumber = (i, j = 1) => {
		if (numString[i - j] === numString[i + j]) {
			findSymmetricalNumber(i, ++j)
		}

		if (j > 1) {
			let str = ''
			while (j) {
				str += numString[i - j];
				--j
			}
			const symmetricalNumber = `${str}${numString[i]}${str.reverse()}`
			numArr.push(symmetricalNumber);
		}
	}

	for (let i = 0; i < numString.length;) {
		numArr.push(numString[i]);
		findSymmetricalNumber(i)
		i++;
	}

	numArr.sort((a, b) => {
		if (a.length === b.length) {
			if (a.length === 1) {
				return b - a
			}

			return parseInt(b) - parseInt(a)
		}
		let minLength = Math.min(b.length, a.length)
		for (let i = 0; i < minLength;) {
			if (a[i] > b[i]) {
				return -1
			}

			if (a[i] < b[i]) {
				return -1
			}
			i++;
		}
		return 0

	})

	const result = parseInt(numArr.join(''));
	return result;

}


module.exports = main;
