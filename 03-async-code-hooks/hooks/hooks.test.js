import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
} from "vitest";

import { User } from "./hooks";

/**
 * * beforeAll() -> Should be executed either before all tests run.
 * * beforeEach() -> Should be executed before every single test run.
 * * afterAll() -> Should be executed after all tests executed.
 * * afterEach() -> Should be executed after every single test.
 */

describe("hooks", () => {
  let testEmail;
  let user;

  beforeAll(() => {
    testEmail = "test@test.com";
    user = new User(testEmail);
    console.log("beforeAll()");
  });

  beforeEach(() => {
    user = new User(testEmail);
    console.log("beforeEach()");
  });

  afterAll(() => {
    console.log("afterAll()");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  it("should update the email", () => {
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });

  it("should have an email property", () => {
    expect(user).toHaveProperty("email");
  });

  it("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it("should still have an email property after clearing the email", () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });
});
