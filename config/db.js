const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://seraj_alam:Mongodb@123@cluster0.bcajl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
