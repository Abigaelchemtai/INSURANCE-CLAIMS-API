import request from "supertest";
import app from "../server";

describe("Client API", () => {

  test("should create a client", async () => {
    const res = await request(app).post("/api/clients").send({
      clientId: "C001",
      name: "Abigael Chemtai",
      email: "abigael@test.com",
      dateOfBirth: "1990-05-10",
      address: "Nairobi"
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name");
  });

  test("should fail with invalid email", async () => {
    const res = await request(app).post("/api/clients").send({
      clientId: "C002",
      name: "Test User",
      email: "invalid-email",
      dateOfBirth: "1990-05-10",
      address: "Nairobi"
    });

    expect(res.statusCode).toBe(400);
  });

});