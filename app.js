const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "pug");
app.set("views", "views");
const port = 3000;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
app.use(bodyParser.urlencoded({ extended: false }));
// rendering assets
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
// handling page not found
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not Found" });
});

app.listen(port, () => console.log(`JS-BASICS app listening on port ${port}!`));
