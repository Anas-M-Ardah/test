import express from "express";
import dotenv from "dotenv";
import { Admin } from "./models/AdminModel";
import { sequelize, connectToDB } from "./config/db";
import { setupAssociations } from "./models/associations";
import { signUp } from "./controllers/authController";

dotenv.configDotenv();
export const app = express();

const PORT = Number(process.env.PORT);

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

// app.listen(PORT, async () => {
//   console.log(`Server is running on port ${PORT}`);

//   // To create the tables, you need to convert the commented lines into normal code:

//   console.log("Connecting to DB...");
//   await connectToDB();
//   console.log("Connected to DB successfully.");
//   console.log("Setting up associations...");
//   setupAssociations();
//   console.log("Associations are set up.");
//   console.log("Syncing Sequelize...");
//   await sequelize.sync({ force: true });
//   console.log("Sequelize has been synced.");
//   console.log("Syncing Admin model...");
//   await Admin.sync({ force: true });
//   console.log("Admin model has been synced.");
// });

export const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
