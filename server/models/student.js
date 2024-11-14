import { DataTypes } from "sequelize"

export  const createStudendModel = async (sequelize) =>{

    const Student =  sequelize.define('Student', {
        name: { type: DataTypes.STRING, allowNull: false },
        age: { type: DataTypes.INTEGER, allowNull: false },
        marks: { type: DataTypes.INTEGER, allowNull: false },
    })
}

// models/studentModel.js

// import { DataTypes } from 'sequelize';
// import sequelize from '../config/database.js';

// const Student = sequelize.define('Student', {
//     name: { type: DataTypes.STRING, allowNull: false },
//     age: { type: DataTypes.INTEGER, allowNull: false },
//     marks: { type: DataTypes.INTEGER, allowNull: false },
// }, {
//     timestamps: false,
// });

// export default Student;


