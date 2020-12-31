import request from "supertest";

import router from "../router";
import App from "../app";

jest.mock("../router", () => {
  return jest.fn((_, res, __) => res.send());
});

describe("app", () => {
  test("app.js", async () => {
    const server = new App();
    return request(server.app)
      .get("/")
      .then(() => {
        expect(router).toHaveBeenCalled();
      });
  });
});
