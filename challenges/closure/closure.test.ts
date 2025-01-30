import { outer } from "./closure";

test("closure", () => {
  const inner = outer();
  expect(inner()).toBe(1);
  expect(inner()).toBe(2);
  expect(inner()).toBe(3);
  expect(inner()).toBe(4);
  expect(inner()).toBe(5);
});
