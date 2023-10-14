import { describe, expect, it } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

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

describe("generateTokenPromise()", () => {
  it("should generate a token value using function Promise", () => {
    const testUserEmail = "yurinapoleao@gmail.com";

    expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });

  it("should generate a token value using async/await", async () => {
    const testUserEmail = "yurinapoleao@gmail.com";

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();
  });
});
