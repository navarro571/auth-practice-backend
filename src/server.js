const express = require("express");
const router = require("./routes");

const { LogError, BoomErrorHandler, OrmErrorHandler, ErrorHandler } = require("./middlewares/error.handler");

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("backend - auth practice");
});


router(app);

app.use(LogError);
app.use(BoomErrorHandler);
app.use(OrmErrorHandler);
app.use(ErrorHandler);

app.listen(3000, () => {
  console.log("Application started on http://localhost:3000/");
});