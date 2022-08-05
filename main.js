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

	if (!Number.isInteger(inputNum)) {
		return inputNum;
	}

	const numString = inputNum.toString();


	const numSet = new Set();

	const MODE_FIND_SYMMETRICAL = {
		LEFT_AND_RIGHT: 'LEFT_AND_RIGHT',
		EVEN_LEFT_AND_RIGHT: 'EVEN_LEFT_AND_RIGHT',
		RIGHT: 'RIGHT'
	};

	const findSymmetricalNumber = (i, j = 1, mode) => {
		if (numString[i - j] === numString[i + j]) {

			if ((i + j) < (numString.length)) {
				if (mode !== MODE_FIND_SYMMETRICAL.EVEN_LEFT_AND_RIGHT) {
					return findSymmetricalNumber(i, ++j, MODE_FIND_SYMMETRICAL.LEFT_AND_RIGHT);
				}
			}
		}


		if (numString[i] === numString[i + j]) {
			if (mode !== MODE_FIND_SYMMETRICAL.EVEN_LEFT_AND_RIGHT) {
				return findSymmetricalNumber(i, ++j, MODE_FIND_SYMMETRICAL.RIGHT);
			}
		}


		if (numString[i - j + 1] === numString[i + j]) {
			if ((i + j) < (numString.length)) {
				if (mode !== MODE_FIND_SYMMETRICAL.LEFT_AND_RIGHT) {
					return findSymmetricalNumber(i, ++j, MODE_FIND_SYMMETRICAL.EVEN_LEFT_AND_RIGHT);
				}
			}
		}


		if (j > 1) {
			const skipCount = j;
			j--;
			let str = ''
			while (j) {
				if (mode === MODE_FIND_SYMMETRICAL.RIGHT) {
					str += numString[i];
				} else if (mode === MODE_FIND_SYMMETRICAL.LEFT_AND_RIGHT) {
					str += numString[i - j];
				} else if (
					mode === MODE_FIND_SYMMETRICAL.EVEN_LEFT_AND_RIGHT
				) {
					str += numString[i - j + 1];

				} else {
					str += numString[i - j];
				}

				--j;
			}

			if (mode === MODE_FIND_SYMMETRICAL.LEFT_AND_RIGHT) {
				const symmetricalNumber = `${str}${numString[i]}${str.split('').reverse().join('')}`;
				return [true, 1, symmetricalNumber];
			}

			if (mode === MODE_FIND_SYMMETRICAL.EVEN_LEFT_AND_RIGHT) {
				const symmetricalNumber = `${str}${str.split('').reverse().join('')}`;
				// return [true, 1, '999'];

				return [true, 1, symmetricalNumber];
			}

			if (mode === MODE_FIND_SYMMETRICAL.RIGHT) {
				const symmetricalNumber = `${str}${numString[i]}`;
				return [true, skipCount, symmetricalNumber];
			}

		}

		return [false];
	}

	for (let i = 0; i < numString.length;) {

		numSet.add(numString[i]);


		let [isFound, skipCount, foundNumber] = findSymmetricalNumber(i);

		if (isFound) {

			numSet.add(foundNumber);

			i += skipCount;

		} else {

			i++;
		}

		// i++;

	}

	const numArr = Array.from(numSet);
	numArr.sort((a, b) => {
		// don't use this because avoid overflow
		// return `${b}${a}` - `${a}${b}`

		if (a.length === b.length) {
			if (a.length === 1) {
				return b - a;
			}

			return b - a;
		}
		let minLength = Math.min(b.length, a.length)
		for (let i = 0; i < minLength;) {
			if (a[i] > b[i]) {
				return -1;
			}

			if (a[i] < b[i]) {
				return 1;
			}
			if (i === minLength - 1) {
				if (a.length > minLength) {
					return b[i] - a[i + 1];
				}

				if (b.length > minLength) {
					return b[i + 1] - a[i];
				}
			}
			i++;
		}
		return 0;

	})

	// return string avoid overflow int range
	return numArr.join('');


}


module.exports = main;
