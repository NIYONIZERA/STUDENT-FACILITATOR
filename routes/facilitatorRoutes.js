import express from  'express';
import facilitatorController from "../controllers/facilitatorControllers.js";
const facilitatroute=express.Router();
facilitatroute.post("/facilitator/create",facilitatorController.createNewFacilitator);
facilitatroute.get("/facilitator/list",facilitatorController.getAllFacilitator)
facilitatroute.get("/id/:id",facilitatorController.getFacilitatorById)
facilitatroute.get("/facilitator/:email",facilitatorController.getFacilitatorByEmail)
facilitatroute.put("/update/:id",facilitatorController.updateFacilitator);
facilitatroute.delete("/remove/:id",facilitatorController.deleteFacilitator)

export default facilitatroute;