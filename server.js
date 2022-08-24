const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { connectDB } = require('./config/dbConn');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
// const { verifyJwt } = require('./middleware/auth');
const User = require('./models/User');
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie parser
app.use(cookieParser());

// CORS
const corsOptions = {
    origin: true, 
    credentials: true,
};
app.use(cors(corsOptions));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Defining Port
const PORT = process.env.PORT || 8080;

// Routes
app.use('/auth', require('./routes/auth'));
app.get('/me', (req, res) => {
    res.status(200).json({ success: true, message: "Yeah! It's Protected..." });
});
app.use('/todos', require('./routes/todo'));

// Connecting to MongoDB and starting Server
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        try {
            console.log(`Server started at PORT ${PORT}`);
        } catch (error) {
            console.log(error.message);
        }
    });
});
