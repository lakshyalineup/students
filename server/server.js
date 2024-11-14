import express  from "express";
import  {connection}  from "./config/database.js";


const app = express();

const PORT = 5432

app.listen(PORT, ()=>{
    console.log(`server is ruunig at PORT ${PORT}`);
    
})

connection()

// // server.js
// import express from 'express';
// import sequelize from './config/database.js';
// import studentRoutes from './routes/studentRoute.js';

// // dotenv.config();
// const app = express();
// const port =  5432;

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api', studentRoutes);

// // Sync Sequelize models and start the server
// sequelize.sync().then(() => {
//     app.listen(port, () => {
//         console.log(`Server is running on port ${port}`);
//     });
// }).catch(error => {
//     console.error('Unable to connect to the database:', error);
// });

