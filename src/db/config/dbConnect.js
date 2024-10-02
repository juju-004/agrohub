import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB connected...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "agroHub",
    });

    isConnected = true;

    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err);
  }
};

export default connectToDB;
