import e from "express";
import characterRouter from "./controller/character.controller.js";
import nemesisRouter from "./controller/nemesis.controller.js";
import secretRouter from "./controller/secret.controller.js";

const app = e();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(characterRouter);
app.use(nemesisRouter);
app.use(secretRouter);

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
