// Define your routes here

export const router = new Router();

router.get("/", (req, res) => {
  // Your route logic here
});

router.post("/user", (req, res) => {
  // Your post route logic here
});

// Define the views for your application
import { App } from "@server";

App = require("../dist/app");

const app = new App(router);

app.listen(3000);
