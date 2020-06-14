const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/testdb", {
//   useNewUrlParser: "true",
// });

mongoose.connect(
  "mongodb://localhost:27017/testdb",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connection succeeded.");
    else
      console.log(
        "Error while connecting MongoDB : " + JSON.stringify(err, undefined, 2)
      );
  }
);
