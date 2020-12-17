const express = require("express");
const path = require("path");
const app = express();
const PORT = 5001;

app.use(express.static("../../public"));
app.use(
  express.static(
    path.join(__dirname, "../../public/react-verkkokauppa", "build")
  )
);

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
