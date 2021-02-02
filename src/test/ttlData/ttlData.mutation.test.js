const request = require("supertest");

const app = require("../../server");
const ttl = require("../../modules/ttlData/ttlData.model");
const {testData, testDataTtl, wrongData} = require("./ttlData.variables");
jest.mock("../../modules/ttlData/ttlData.model");

describe("ttl data mutation", () => {
  describe("POST /ttl/", () => {
    it("should return 400", async () => {
      await request(app)
        .post("/ttl/")
        .set('Content-Type', 'application/json')
        .send(wrongData)
        .expect(400);
    });
    it("should return 409", async () => {
      const mockGet= jest.fn(() => "student");
      ttl.get = mockGet;
      await request(app)
        .post("/ttl/")
        .set('Content-Type', 'application/json')
        .send(testData)
        .expect(409);
    });
    it("should return 201", async () => {
      const mockGet= jest.fn(() => null);
      ttl.get = mockGet;
      await request(app)
        .post("/ttl/")
        .set('Content-Type', 'application/json')
        .send(testData)
        .expect(201);
    });
  });

  describe("DELETE /ttl/:key", () => {
    it("should return 404", async () => {
      await request(app)
        .delete(`/ttl/`)
        .expect(404);
    });
    it("should return 204", async () => {
      const mockremove = jest.fn(() => 0);
      ttl.remove = mockremove;
      await request(app)
        .delete(`/ttl/Bobby`)
        .expect(204);
    });
    it("should return 200", async () => {
      const mockremove = jest.fn(() => 1);
      ttl.remove = mockremove;
      await request(app)
        .delete(`/ttl/Bobby`)
        .expect(200);
    });
  });
})