import fetch from "isomorphic-fetch";
import { BASE_URL } from "../utils/constants";

class Request {
  async get(endpoint) {
    try {
      const data = await fetch(`${BASE_URL}/${endpoint}`);
      return await data.json();
    } catch (e) {
      throw e;
    }
  }
  //async post(id, obj) {}
  //async put(id, obj) {}
  //async delete(id) {}
}

module.exports = { Request };
