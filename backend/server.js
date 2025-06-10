import express from "express";
import dotEnv from "dotenv";
import { connectDB } from "./config/db.js";
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './routers/product.router.js';

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// Middleware
app.use(express.json());


app.use('/api/products', productRoutes);

// Production configuration
if (NODE_ENV === "production") {
    const staticPath = path.join(__dirname, '../frontend/dist');
    app.use(express.static(staticPath));
    
    console.log('Static files path:', staticPath); // Debug log
    
    // Catch-all route must come last
    app.get('*', (req, res) => {
        const indexPath = path.join(staticPath, 'index.html');
        console.log('Serving index.html from:', indexPath); // Debug log
        res.sendFile(indexPath);
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
});