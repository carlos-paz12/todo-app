require("dotenv").config();
require("./database/connection");

const app = require("./config/app");
const port = process.env.SERVER_PORT;

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
