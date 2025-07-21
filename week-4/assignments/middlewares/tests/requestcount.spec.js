const app = require("../requestcount");

const request = require("supertest");
const assert = require("assert");

describe("GET /user", function () {
  it("One request responds with 1", function (done) {
    request(app)
      .get("/requestCount")
      .then((response) => {
        expect(response.body.requestCount).toBe(1);
        done();
      });
  });

  it("3 more requests log 5", function (done) {
    for (let i = 0; i < 3; i++) {
      request(app).get("/user").then();
    }
    request(app)
      .get("/requestCount")
      .then((response) => {
        expect(response.body.requestCount).toBe(5);
        done();
      });
  });
});
