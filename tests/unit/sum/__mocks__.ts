type SumMock = Mock<{ firstNumber: number; secondNumber: number }, number>;

const mock1: SumMock = {
	input: {
		firstNumber: 1,
		secondNumber: 2,
	},
	output: 3,
};
const mock2: SumMock = {
	input: {
		firstNumber: 4,
		secondNumber: 5,
	},
	output: 9,
	description: "Some specific message",
};

export const mocks: Array<SumMock> = [mock1, mock2];
