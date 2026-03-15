import request from "supertest";
import app from "../server";

describe("Policy API", () => {

  test("should create a policy", async () => {
    const res = await request(app).post("/api/policies").send({
      policyId: "P001",
      clientId: "69b5bc8e54db63bb97bf39bc",
      policyNumber: "POL123",
      policyType: "life",
      startDate: "2024-01-01",
      endDate: "2025-01-01",
      premiumAmount: 1000,
      coverageAmount: 50000
    });

    expect(res.statusCode).toBe(201);
  });

});