const { list, single, singleDescription } = require("../models/products");
import { single as singleCat } from "./../models/categories";
const {
  filterToCategories,
  categoriesSingle,
} = require("../services/categories");
const { sendProducts, sendProduct } = require("../services/products");

const author = {
  name: "Franco",
  lastname: "Di Leo",
};

const searchById = async (id) => {
  try {
    const obj = {};
    const product = await single(id);
    const { category_id } = product;
    const { path_from_root } = await singleCat(category_id);

    const categories = filterToCategories(path_from_root);

    const { plain_text: description } = await singleDescription(id);
    // Configuración de Babel no me permite usar spread
    Object.assign(obj, { product, description, categories });
    const item = sendProduct(obj);
    return item;
  } catch (e) {
    console.error(e);
  }
};

const search = async (product) => {
  try {
    const { results, filters } = await list(product);
    //if (results.length === 0) return res.sendStatus(404);
    const items = sendProducts(results);
    const categories = filterToCategories(filters);
    return { author, items, categories };
    //res.json({ author, categories, items });
  } catch (e) {
    console.error(e);
  }
};

module.exports = { search, searchById };
