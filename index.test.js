const request = require("supertest");
const app = require("./index");
const { connectDB } = require("./config/db");


describe("GET /", () =>
{
    test("should return status 200 and a message", async () =>
    {
        const response = await request(app).get("/");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: "API running..." });
    });
});

describe("Database connection", () =>
{
    test("should connect to the database", () =>
    {
        expect(connectDB()).toBeTruthy();
    });
});

