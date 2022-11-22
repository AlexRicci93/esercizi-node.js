import test from "node:test";

import supertest from "supertest";

import app from "./app";

const request = supertest(app);

test("GET /meals", async () => {
  const response = await request
    .get("/meals")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual([{ meals: "pizza" }]);
});
