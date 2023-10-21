import { promises as fs } from "fs";
import { describe, expect, it, vi } from "vitest";
import writeData from "./io";

describe("writeData()", () => {
  vi.mock("fs");

  it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFilename = "test.txt";

    writeData(testData, testFilename);

    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    expect(fs.writeFile).toBeCalled();
  });
});
