import { expect, it } from "vitest";
import { difference } from "../../../src/lib/utils/math";
import { mocks } from "./__mocks__";

for (const mock of mocks) {
	it(mock.description ?? `Adds ${mock.input.firstNumber} to ${mock.input.secondNumber}, expecting ${mock.output}`, () => {
		const result = difference(mock.input.firstNumber, mock.input.secondNumber);
		expect(result).toStrictEqual(mock.output);
	});
}
