import { Router } from "express";
import { listPersons, newPerson, showPerson } from "../controllers/personsController.js";

const router = Router();
router.get("/", listPersons);
router.get("/new", newPerson);
router.get("/:id", showPerson);
export default router;