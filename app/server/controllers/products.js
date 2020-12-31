/* Import models */
import { Products } from "../models/products";
import { Categories } from "./../models/categories";

/* Modelo de Author */
import { Author } from "./../models/author";

/* Generate sign of Categories */
const { filterToCategories } = require("../services/categories");

/* Generate sign of products and product */
const { sendProducts, sendProduct } = require("../services/products");

const { info: author } = new Author("franco", "di leo");
const products = new Products();
class Search {
  // get 4 products by name
  async products(name) {
    try {
      const { results, filters } = await products.list(name);
      const items = sendProducts(results);
      const categories = filterToCategories(filters);
      return { author, items, categories };
    } catch (e) {
      console.error(e);
    }
  }

  // get single product by id
  async product(id) {
    try {
      const product = await products.single(id);
      const { category_id } = product;
      const categories = await this.productCategory(category_id);
      const { plain_text: description } = await products.singleDescription(id);
      const obj = { product, description, categories };
      const item = sendProduct(obj);
      return item;
    } catch (e) {
      console.error(e);
    }
  }

  // private
  async productCategory(category_id) {
    try {
      const categories = new Categories();
      const { path_from_root } = await categories.single(category_id);
      return filterToCategories(path_from_root);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = { Search };
