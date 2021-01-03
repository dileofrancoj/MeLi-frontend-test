import { Request } from "./../services/Request";

class Categories extends Request {
  constructor() {
    super();
  }
  async single(id) {
    try {
      return await this.get(`categories/${id}`);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = { Categories };
