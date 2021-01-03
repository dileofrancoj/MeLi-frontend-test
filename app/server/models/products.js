import { Request } from "./../services/Request";

class Products extends Request {
  constructor() {
    super();
  }
  async list(q, limit = 4) {
    return await this.get(`/sites/MLA/search?q=${q}&limit=${limit}`);
  }

  async single(id) {
    return await this.get(`items/${id}`);
  }
  async singleDescription(id) {
    return await this.get(`items/${id}/description`);
  }
}

module.exports = { Products };
