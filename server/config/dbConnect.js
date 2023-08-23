const { default: mongoose } = require("mongoose");

const dbConnect = (dbName) => {
  try {
    const conn = mongoose.connect(`mongodb+srv://***:***@***.ey93gey.mongodb.net/${dbName}?retryWrites=true&w=majority`);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
