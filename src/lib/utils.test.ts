import { describe, expect, it } from "vitest";
import { formatEvidenceStatus } from "./utils";

describe("formatEvidenceStatus", () => {
  it("formats hyphenated statuses", () => {
    expect(formatEvidenceStatus("to-be-confirmed")).toBe("To Be Confirmed");
    expect(formatEvidenceStatus("verified")).toBe("Verified");
  });
});
