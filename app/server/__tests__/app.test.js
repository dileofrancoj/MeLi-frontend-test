import request from "supertest";

import cors from "cors";
import router from "../router";
import app from "../app";

jest.mock("../router", () => {
  return jest.fn((req, res, next) => res.send());
});

describe("app", () => {
  test("app.js", () => {
    return request(app)
      .get("/")
      .then(() => {
        expect(router).toHaveBeenCalled();
      });
  });
});
