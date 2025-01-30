import { rearrangeArray } from ".";

describe("rearrangeArray", () => {
  it("should rearrange the array in place", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8];
    rearrangeArray(nums);
    expect(nums).toEqual([3, 4, 5, 6, 1, 2, 7, 8]);
  });
});
