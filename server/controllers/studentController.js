import { userModel } from "../config/database.js";
// import Student from "../models/student.js"

// Create 
exports.createStudent = async (req, res) => {
    try {
        const student = await userModel.create(req.body);
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Retrieve all 
exports.getAllStudents = async (req, res) => {
    try {
        const students = await userModel.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Retrieve by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await userModel.findByPk(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update 
exports.updateStudent = async (req, res) => {
    try {
        const [updated] = await userModel.update(req.body, {
            where: { id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ error: 'Student not found' });
        }
        const updatedStudent = await Student.findByPk(req.params.id);
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete 
exports.deleteStudent = async (req, res) => {
    try {
        const deleted = await userModel.destroy({
            where: { id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 
// Retrieve a single student by ID
// export const getStudentById = async (req, res) => {
//     try {
//         const student = await Student.findByPk(req.params.id);
//         if (!student) return res.status(404).json({ error: 'Student not found' });
//         res.status(200).json(student);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve student' });
//     }
// };// controllers/studentController.js
// // import Student from '../models/student.js';

// // Create a new student
// export const createStudent = async (req, res) => {
//     try {
//         const student = await Student.create(req.body);
//         res.status(201).json(student);
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to create student' });
//     }
// };

// // Retrieve all students
// export const getAllStudents = async (req, res) => {
//     try {
//         const students = await Student.findAll();
//         res.status(200).json(students);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to retrieve students' });
//     }
// };


// // Update a student's information
// export const updateStudent = async (req, res) => {
//     try {
//         const student = await Student.findByPk(req.params.id);
//         if (!student) return res.status(404).json({ error: 'Student not found' });
//         await student.update(req.body);
//         res.status(200).json(student);
//     } catch (error) {
//         res.status(400).json({ error: 'Failed to update student' });
//     }
// };

// // Delete a student record
// export const deleteStudent = async (req, res) => {
//     try {
//         const student = await Student.findByPk(req.params.id);
//         if (!student) return res.status(404).json({ error: 'Student not found' });
//         await student.destroy();
//         res.status(200).json({ message: 'Student deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to delete student' });
//     }
// };
