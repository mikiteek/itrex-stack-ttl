const request = require("supertest");

const app = require("../../server");
const ttl = require("../../modules/ttlData/ttlData.model");
const {testData, testDataTtl, wrongData} = require("./ttlData.variables");
jest.mock("../../modules/ttlData/ttlData.model");

describe("ttl data query", () => {
  describe("GET /ttl/:key", () => {
    it("should return 404", async () => {
      const mockGet = jest.fn(() => null);
      ttl.get = mockGet;
      await request(app)
        .get("/ttl/Danny")
        .set('Content-Type', 'application/json')
        .expect(404);
    });
    it("should return 200", async () => {
      const value = "student"
      const mockGet = jest.fn(() => value);
      ttl.get = mockGet;
      const response = await request(app)
        .get("/ttl/Danny")
        .set('Content-Type', 'application/json')
        .expect(200);
      expect(response.body).toEqual({
        value: value
      })
    });
  });

})