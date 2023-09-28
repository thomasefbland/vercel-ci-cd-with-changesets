type DifferenceMock = Mock<{ firstNumber: number; secondNumber: number }, number>;

const mock1: DifferenceMock = {
	input: {
		firstNumber: 5,
		secondNumber: 1,
	},
	output: 4,
};
const mock2: DifferenceMock = {
	input: {
		firstNumber: 9,
		secondNumber: 3,
	},
	output: 6,
	description: "Some specific message",
};

export const mocks: Array<DifferenceMock> = [mock1, mock2];
