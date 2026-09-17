import { describe, expect, test } from "vitest";
import { uuidv4 } from "../../src/plugins";

describe("get-uuid.plugin.ts", () => {
  test("getuuid should return a uuid", () => {
    const uuid = uuidv4();
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
