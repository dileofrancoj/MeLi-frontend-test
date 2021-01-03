import { Author } from "../../models/author";
describe("Test sobre Author", () => {
  test("should return an object with name and lastname propertys", () => {
    const author = new Author("franco", "di leo");
    expect(author.name).toEqual("franco");
    expect(author.lastname).toEqual("di leo");
  });
});
