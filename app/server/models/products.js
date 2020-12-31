import fetch from "isomorphic-fetch";
import { BASE_URL } from "../utils/constants";

class Products {
  async list(q, limit = 4) {
    const data = await fetch(
      `${BASE_URL}/sites/MLA/search?q=${q}&limit=${limit}`
    );
    return await data.json();
  }

  async single(id) {
    const data = await fetch(`${BASE_URL}/items/${id}`);
    return await data.json();
  }
  async singleDescription(id) {
    const data = await fetch(`${BASE_URL}/items/${id}/description`);
    return await data.json();
  }
}

module.exports = { Products };
