import { add } from "../../src/index";

describe("add", () => {
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });
});
