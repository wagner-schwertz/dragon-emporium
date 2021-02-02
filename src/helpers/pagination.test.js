import pagination from "./pagination";

describe("pagination helper function", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const paginatedArr = pagination(arr, 3);
  it("outputs the correct number of pages", () => {
    expect(paginatedArr.pages).toEqual(4);
  });
  it("outputs the correct page content", () => {
    expect(paginatedArr.page(3)).toEqual([7, 8, 9]);
  });
});
