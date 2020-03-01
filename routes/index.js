const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

const build = "../client/build/index.html";
const public = "../client/public/index.html";
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, build)) || res.sendFile(path.join(__dirname, public));
});

module.exports = router;
