import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("applications/list", { items: [] });
});

router.get("/new", (req, res) => {
  res.render("applications/form", { values: {}, edit: false });
});

router.get("/:id", (req, res) => {
  res.render("applications/show", {
    item: {
      id: req.params.id,
      vorname: "Max",
      nachname: "Mustermann",
      firmenname: "Beispiel GmbH",
      status: "gesendet",
      kanal: "E-Mail",
      bewerbungsdatum: "2025-09-30",
      rueckmeldung_bis: "2025-10-15",
      notizen: "Demo"
    }
  });
});

export default router;