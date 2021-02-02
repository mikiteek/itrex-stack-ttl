const request = require("supertest");

const app = require("../../server");
const stack = require("../../modules/stackData/stackData.model");
const {testData, wrongData} = require("./stackData.variables");
jest.mock("../../modules/stackData/stackData.model");

describe("stack data mutation", () => {
  describe("POST /stack/", () => {
    it("should return 201", async () => {
      const mockPush = jest.fn();
      stack.push = mockPush;
      await request(app)
        .post("/stack")
        .set('Content-Type', 'application/json')
        .send(testData)
        .expect(201);
    });
    it("should return 400", async () => {
      await request(app)
        .post("/stack")
        .set('Content-Type', 'application/json')
        .send(wrongData)
        .expect(400);
    });
  });
  describe("DELETE /stack/", () => {
    it("should return 204", async () => {
      const mockGetLength = jest.fn(() => 0);
      stack.getLength = mockGetLength;
      await request(app)
        .delete("/stack")
        .expect(204);
    });
    it("should return 200", async () => {
      const mockGetLength = jest.fn(() => 2);
      const mockPop = jest.fn(() => "Hello");
      stack.getLength = mockGetLength;
      stack.pop = mockPop;
      const response = await request(app)
        .delete("/stack")
        .expect(200);

      expect(response.body).toEqual({item: "Hello"})
    });
  });
});