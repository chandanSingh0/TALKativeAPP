import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-atjchlh-shard-00-00.b3jis52.mongodb.net:27017,ac-atjchlh-shard-00-01.b3jis52.mongodb.net:27017,ac-atjchlh-shard-00-02.b3jis52.mongodb.net:27017/?ssl=true&replicaSet=atlas-ma5cng-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting Database", error.message);
  }
};

export default Connection;
