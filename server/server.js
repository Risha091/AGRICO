const express = require('express')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const authRouter = require('./routes/auth/auth-routes')
const adminProductsRouter = require('./routes/admin/products-routes')
const shopProductsRouter = require('./routes/shop/products-routes')

mongoose.connect('mongodb+srv://rishamondalfiemcse21:Rishamondal2003@cluster0.mfhzj.mongodb.net/')
.then(() => console.log("Mongodb connected"))
.catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 4500;


app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'PUT', 'POST', 'DELETE'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter)
app.use('/api/shop/products', shopProductsRouter)

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));

