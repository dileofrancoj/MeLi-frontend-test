import { Products } from "../../models/products";
describe("Test sobre products", () => {
  test("should return an object to Macbook product", async () => {
    const product = "Macbook";
    const prod = new Products();
    const products = await prod.list(product);
    expect(typeof products).toBe("object");
  });
});
