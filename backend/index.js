const express = require("express");
const http = require("http");
var cors = require("cors");
const { connection } = require("./Config/db");
const { userRoutes } = require("./Router/userRouter");
const { cartRouter } = require("./Router/cartRouter");
const { authtication } = require("./middleware/authtication");
const { productRouter } = require("./Router/productRouter");

const app = express();

const HttpsServer = http.createServer(app);

const PORT = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use("/", userRoutes);
app.use("/", productRouter);

app.use(authtication);

app.use("/", cartRouter);

HttpsServer.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connect to DB and PORT No:-", PORT);
  } catch (err) {
    console.log("not connected to DB", err);
  }
});
