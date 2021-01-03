import { productReducer } from "./../../reducers/product";

export const demoState = {
  loading: false,
  error: false,
  product: null,
};

describe("Test in product reducer", () => {
  test("shoud return a default state ", () => {
    const state = productReducer(demoState, {});
    expect(state).toEqual(demoState);
  });

  test("should add set a object in a product", () => {
    const payload = { id: 1, name: "test product" };

    const action = { payload, type: "FETCH_SUCCESS" };
    const state = productReducer(demoState, action);

    expect(typeof state.product).toEqual("object");
  });

  test("should set loading", () => {
    const payload = {
      loading: true,
    };
    const action = { payload, type: "FETCHING" };
    const state = productReducer(demoState, action);
    expect(state.loading).toEqual(true);
  });
});
