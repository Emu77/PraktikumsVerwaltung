import { Router } from "express";
import { listCompanies, newCompany, showCompany } from "../controllers/companiesController.js";

const router = Router();
router.get("/", listCompanies);
router.get("/new", newCompany);
router.get("/:id", showCompany);
export default router;