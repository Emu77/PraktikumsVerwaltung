import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("companies/list", { items: [] });
});

router.get("/new", (req, res) => {
  res.render("companies/form", { values: {}, edit: false });
});

router.get("/:id", (req, res) => {
  res.render("companies/show", {
    item: { id: req.params.id, firmenname: "Beispiel GmbH", ansprechpartner: "Herr Beispiel", email: "info@beispiel.de", telefon: "98765", adresse: "Musterstraße 1", website: "http://beispiel.de", notizen: "Demo-Daten" }
  });
});

export default router;