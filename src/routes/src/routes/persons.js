import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("persons/list", { items: [] });
});

router.get("/new", (req, res) => {
  res.render("persons/form", { values: {}, edit: false });
});

router.get("/:id", (req, res) => {
  res.render("persons/show", {
    item: { id: req.params.id, vorname: "Max", nachname: "Mustermann", email: "test@example.com", telefon: "12345" }
  });
});

export default router;