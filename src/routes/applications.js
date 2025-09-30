import { Router } from "express";
import { listApplications, newApplication, showApplication } from "../controllers/applicationsController.js";

const router = Router();
router.get("/", listApplications);
router.get("/new", newApplication);
router.get("/:id", showApplication);
export default router;