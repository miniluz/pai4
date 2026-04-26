import express from "express";
import _ from "lodash";

const app = express();

const l = [1, 2, 3, 4];

app.get("/", (req, res) => {
  res.send("Hello DevSecOps: " + _.filter(l, (v) => v > 2));
});

app.listen(3000, () => console.log("Running"));
