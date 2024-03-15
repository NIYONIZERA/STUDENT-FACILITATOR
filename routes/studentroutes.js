import express from  'express';
import studentController from "../controllers/studentControllers.js";
const route=express.Router();
route.post("/student/create",studentController.createNewStudent);
route.get("/student/list",studentController.getAllStudents)
route.get("/student/:id",studentController.getStudentById)
route.get("/student/:email",studentController.getStudentByEmail)
route.put("/student/updateStudent",studentController.updateStudent);
route.delete("/student/:id",studentController.deleteStudent)

export default route;
