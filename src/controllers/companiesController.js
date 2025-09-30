import { query } from "../db.js";

export async function listCompanies(req, res) {
  try {
    const result = await query("SELECT * FROM potpraktikum ORDER BY id ASC");
    res.render("companies/list", { items: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Fehler beim Abrufen der Unternehmen");
  }
}

export function newCompany(req, res) {
  res.render("companies/form", { values: {}, edit: false });
}

export async function showCompany(req, res) {
  try {
    const result = await query("SELECT * FROM potpraktikum WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).send("Unternehmen nicht gefunden");
    res.render("companies/show", { item: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Fehler beim Abrufen des Unternehmens");
  }
}