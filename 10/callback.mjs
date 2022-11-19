import * as fs from "node:fs";

fs.writeFile("message.text", "Hello", { encoding: "utf-8" }, function (error) {
  if (error) {
    console.error(error);
  }
});
