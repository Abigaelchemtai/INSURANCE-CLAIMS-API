import request from "supertest";
import app from "../server";

describe("Claim API", () => {

  test("should submit a claim", async () => {
    const res = await request(app).post("/api/claims").send({
      claimId: "CL001",
      policyId: "69b5c3279e13c4de99a62194",
      clientId: "69b5bc8e54db63bb97bf39bc",
      claimDate: "2024-06-01",
      claimAmount: 5000,
      description: "Accident claim"
    });

    expect(res.statusCode).toBe(201);
  });

});