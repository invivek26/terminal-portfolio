import { describe, expect, test } from "bun:test";
import { findClosestCommand } from "./commands";

describe("findClosestCommand", () => {
  test("suggests close commands and ignores unrelated input", () => {
    expect(findClosestCommand("projets")).toBe("projects");
    expect(findClosestCommand("experence")).toBe("experience");
    expect(findClosestCommand("definitely-not-a-command")).toBe("");
  });
});
