import express from "express";
import "express-async-errors";

const app = express();

app.get("/meals", (request, response) => {
  response.json([{ meals: "Pizza" }]);
});

export default app;