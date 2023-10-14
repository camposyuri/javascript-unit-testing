import { describe, expect, it } from "vitest";
import { generateToken } from "./async-example";

describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "yurinapoleao@gmail.com";

    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
