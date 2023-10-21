import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("should execute logFn if provided", () => {
    const log = {
      logger: () => {},
    };

    const spy = vi.spyOn(log, "logger");

    generateReportData(spy);

    expect(spy).toBeCalled();
  });
});
