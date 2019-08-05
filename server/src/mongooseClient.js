const mongoose = require("mongoose");
const { writeLocationData } = require("./dbHandlers/LocationData");

// pre-prod investigate: https://stackoverflow.com/questions/14342708/mongoose-indexing-in-production-code
mongoose
  .connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Database connection succesful");
  })
  .catch(err => {
    console.error(err);
    throw new Error("Failed to connect to database!");
  });

mongoose.connection.on("error", err => {
  // mongoose will attemp reconnection
  console.error(err);
});
