import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("Function Validate", () => {
  it("should throw an error, if an empty string is provided.", () => {
    const emptyString = "";
    const resultFn = () => validateStringNotEmpty(emptyString);
    expect(resultFn).toThrowError(/Invalid/);
  });

  it("should return 'undefined' when an empty string is not provided.", () => {
    const notEmptyString = "Not empty";
    const result = validateStringNotEmpty(notEmptyString);
    expect(result).toBeUndefined();
  });

  it("should throw an error, if NaN is provided.", () => {
    const isNotNumber = NaN;
    const resultFn = () => validateNumber(isNotNumber);
    expect(resultFn).toThrowError(/Invalid number input/);
  });

  it("should return 'undefined' when passed not a number.", () => {
    const isNumber = 1234;
    const result = validateNumber(isNumber);
    expect(result).toBeUndefined();
  });

  it("should throw an error if non-numeric value is provided", () => {
    const input = "1";
    const validateFn = () => validateNumber(input);
    expect(validateFn).toThrow();
  });
});
