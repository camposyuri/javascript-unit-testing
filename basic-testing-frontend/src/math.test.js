import { describe, expect, it } from "vitest";
import { add, calculateResult } from "./math";

describe("add()", () => {
	it("should summarize all number values in an array.", () => {
		//* Arrange -> Define the testing environment & values.
		const numbers = [1, 2];

		//* Act -> Run the actual code / function that should be tested.
		const result = add(numbers);

		//* Asserts -> Evaluate the produced value / result and compare it to the expected value / result.
		const expectedResult = numbers.reduce(
			(prevValue, curValue) => prevValue + curValue,
			0
		);
		expect(result).toBe(expectedResult);
	});

	it("should yield NaN if a least one invalid number is provided.", () => {
		const inputs = ["invalid", 1];

		const result = add(inputs);

		expect(result).toBeNaN();
	});

	it("should yield a correct sum if an array of numeric string values is provided.", () => {
		const numbers = ["1", "2"];

		const result = add(numbers);

		const expectedResults = numbers.reduce(
			(prevValue, curValue) => +prevValue + +curValue,
			0
		);

		expect(result).toBe(expectedResults);
	});

	it("should yield 0 if an empty array is provided.", () => {
		const numbers = [];

		const result = add(numbers);

		expect(result).toBe(0);
	});

	it("should throw an error if no value is passed into the function.", () => {
		const resultFn = () => add();

		expect(resultFn).toThrow();
	});

	it("should throw an error if provided with multiple arguments instead of an array.", () => {
		const num1 = 1;
		const num2 = 2;

		const resultFn = () => add(num1, num2);

		expect(resultFn).toThrow(/is not iterable/);
	});
});

describe("calculateResult()", () => {
	it("should summarize return a typeof string.", () => {
		const numbersValues = [1, 2];

		const calculateResultString = calculateResult(numbersValues);

		expect(calculateResultString).toBeTypeOf("string");
	});

	it("should return error if an array string values is provided.", () => {
		const numbersValues = ["true", "false"];

		const calculateFn = calculateResult(numbersValues);

		expect(calculateFn).toBe("Invalid number input.");
	});
});
