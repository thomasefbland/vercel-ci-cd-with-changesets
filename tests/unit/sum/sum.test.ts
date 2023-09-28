import { expect, it } from "vitest";
import { sum } from "../../../src/lib/utils/math";
import { mocks } from "./__mocks__";

for (const mock of mocks) {
	it(mock.description ?? `Adds ${mock.input.firstNumber} to ${mock.input.secondNumber}, expecting ${mock.output}`, () => {
		const result = sum(mock.input.firstNumber, mock.input.secondNumber);
		expect(result).toStrictEqual(mock.output);
	});
}
