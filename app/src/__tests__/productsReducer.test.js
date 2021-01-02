import { productsReducer } from "./../../reducers/products";

export const demoState = {
  loading: false,
  error: false,
  products: [],
  categories: [],
};

describe("Test in products reducer", () => {
  test("shoud return a default state ", () => {
    const state = productsReducer(demoState, {});
    expect(state).toEqual(demoState);
  });

  test("should add a new element to state", () => {
    const payload = {
      items: [{ id: 1, name: "test product" }],
      categories: ["test"],
    };
    const action = { payload, type: "FETCH_SUCCESS" };
    const state = productsReducer(demoState, action);

    expect(state.products.length).toEqual(1);
    expect(state.categories.length).toEqual(1);
  });

  test("should set loading", () => {
    const payload = {
      loading: true,
    };
    const action = { payload, type: "FETCHING" };
    const state = productsReducer(demoState, action);
    expect(state.loading).toEqual(true);
  });
});
