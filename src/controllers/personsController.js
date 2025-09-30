import { query } from "../db.js";

export async function listPersons(req, res) {
  try {
    const result = await query("SELECT * FROM person ORDER BY id ASC");
    res.render("persons/list", { items: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Fehler beim Abrufen der Personen");
  }
}

export function newPerson(req, res) {
  res.render("persons/form", { values: {}, edit: false });
}

export async function showPerson(req, res) {
  try {
    const result = await query("SELECT * FROM person WHERE id = $1", [req.params.id]);
    if (result.rows.length === 0) return res.status(404).send("Person nicht gefunden");
    res.render("persons/show", { item: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Fehler beim Abrufen der Person");
  }
}