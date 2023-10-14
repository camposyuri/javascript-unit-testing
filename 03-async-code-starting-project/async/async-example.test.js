import { describe, expect, it } from "vitest";
import { generateToken } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", () => {
    const testUserEmail = "yurinapoleao@gmail.com";

    generateToken(testUserEmail, (err, token) => {
      expect(token).toBeDefined();
    });
  });
});
