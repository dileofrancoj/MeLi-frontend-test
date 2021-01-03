import { Categories } from "../../models/categories";
describe("Test sobre Categories", () => {
  test("should return an object to MLA1055 categorie", async () => {
    const id = "MLA1055";
    const cat = new Categories();
    const categories = await cat.single(id);
    expect(typeof categories).toBe("object");
  });
});
