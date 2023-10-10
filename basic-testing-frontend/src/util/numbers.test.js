import { describe, expect, it } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
	it("should transform a string value into a number.", () => {
		// Arrange
		const convertToNumber = "22";

		// Act
		const result = transformToNumber(convertToNumber);

		// Asserts
		const expectedValue = +convertToNumber;

		expect(result).toBe(expectedValue);
	});

	it("should transform a boolean value into a number.", () => {
		const convertToNumber = true;

		const result = transformToNumber(convertToNumber);

		const expectedValue = +convertToNumber;

		expect(result).toBe(expectedValue);
	});

	it("should yield NaN if the value contains a character.", () => {
		const convertToNumber = "invalid number";

		const result = transformToNumber(convertToNumber);

		expect(result).toBeNaN();
	});

	// Solution

	it("should transform a string number to a number of type of number.", () => {
		const input = "1";

		const result = transformToNumber(input);

		expect(result).toBeTypeOf("number");
	});
});

describe("cleanNumbers()", () => {
	it("should return an array of number values if an array of string number values is provided.", () => {
		const numberValues = ["1", "2"];

		const cleanedNumbers = cleanNumbers(numberValues);

		expect(cleanedNumbers[0]).toBeTypeOf("number");
	});
});
