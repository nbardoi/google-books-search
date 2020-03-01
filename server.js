const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/googlebooks", { useNewUrlParser: true }
);

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  const path = require('path');
  app.get("*", (req,res) =>  {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
