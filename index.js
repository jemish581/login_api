import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

const port = 3000;
app.use(bodyParser.json());
app.listen(port, () => {
  console.log(
    `server connection sucssesfully on port ----> http://localhost${port}`
  );
});

//---------routes----
import router from "./routes/index.js";

app.use("/", router);

//------connection into a mongodb------

mongoose
  .connect(
    "mongodb+srv://jemish0581:Shivay99@cluster0.5ijjgyt.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      logger: console.log,
      loggerLevel: "debug",
    }
  )
  .then(() => {
    console.warn("Database connected successfully...");
  });
