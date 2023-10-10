import { describe, it, expect } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText()", () => {
  it("should return a string, no matter which value is passed in.", () => {
    const val1 = 1;
    const val2 = "invalid";
    const val3 = false;

    const result1 = generateResultText(val1);
    const result2 = generateResultText(val2);
    const result3 = generateResultText(val3);

    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });

  it("should return a string that contains the calculation result if a number is provided as a result.", () => {
    const result = 45;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it("should return a string that contains the word 'Invalid'.", () => {
    const result = "invalid";

    const resultText = generateResultText(result);

    expect(resultText).toContain("Invalid");
  });
  it("should return a empty string if result to equal 'no-calc'.", () => {
    const result = "no-calc";

    const resultText = generateResultText(result);

    expect(resultText).toBe("");
  });
});
