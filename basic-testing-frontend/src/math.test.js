import { expect, it } from "vitest";
import { add } from "./math";

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
