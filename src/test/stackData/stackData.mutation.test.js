const request = require("supertest");

const app = require("../../server");
const stack = require("../../modules/stackData/stackData.model");
const {testData} = require("./stackData.variables");

describe("stack data mutation", () => {
  describe("POST /stack/", () => {
    afterAll(() => {
      stack.pop();
    });
    it("should return 201", async () => {
      await request(app)
        .post("/stack")
        .set('Content-Type', 'application/json')
        .send({
          data: testData,
        })
        .expect(201);
    });
  });
});