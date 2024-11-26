import express from "express";
import * as productController from "../controllers/productController";

export const productRoutes = express.Router();

// Route for get all new arrivals products
productRoutes.get("/newArrivals", productController.getNewArrivalsProducts);

// Route for get all products based on user search
productRoutes.get("/search/:text", productController.findProductsByText);

productRoutes.get("/product/brand/:brandName", productController.getProductsByBrand as any);
productRoutes.post("/product/create", productController.createProductController as any);
