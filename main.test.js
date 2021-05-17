import { sumTwoNum } from './main.js';

describe("sumTwoNUm tests", () => {
  it("should add 2 numbers together", () => {
    const result = sumTwoNum(5, 10);

    expect(result).toBe(15);
  });
});
