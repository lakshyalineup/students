import  {Sequelize}  from "sequelize";
import  { createStudendModel } from "../models/student.js";

const sequelize = new Sequelize( 'students', 'postgres', 'lakshya1223',{
    host: 'localhost',
    dialect: 'postgres',
    
});

let userModel = null;

const connection = async() =>{
    try{
        await sequelize.authenticate();
        console.log("conncted");
        userModel = await createStudendModel(sequelize)
        await sequelize.sync();
        console.log("Database Synced");
    }
    catch (error) {
      console.error("unable to connect:", error);
    }
}

   export {
    connection,
    userModel
   }

// config/database.js
// import { Sequelize } from 'sequelize';


// const sequelize = new Sequelize("student", "postgres", "lakshya1223", {
//     host: "localhost",
//     dialect: 'postgres',
//     port: 5432,
// });

// export default sequelize;
