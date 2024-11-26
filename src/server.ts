import express from "express";
import dotenv from "dotenv";
import { Admin } from "./models/AdminModel";
import { sequelize, connectToDB } from "./config/db";
import { setupAssociations } from "./models/associations";
import { productRoutes } from "./routes/productRoutes";
import merchantRoutes from "./routes/merchantRoutes";
import { invalidRoute, invalidJSON } from "./middleware/errorHandler";
import { signUp } from "./controllers/authController";

dotenv.config();

export const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 3000;

app.use("/api", productRoutes);
app.use("/api/", merchantRoutes);

// Middleware to handle invalid routes
app.use(invalidRoute);

// Middleware to handle invalid JSON structure
app.use(invalidJSON);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // To create the tables, you need to convert the commented lines into normal code:

  console.log("Connecting to DB...");
  await connectToDB();
  console.log("Connected to DB successfully.");

  // console.log("Setting up associations...");
  // await setupAssociations();
  // console.log("Associations set up successfully.");

  // //sync the models with the database
  // await sequelize.sync({ force: true });
  // console.log("Models synced successfully.");
});
