import { query } from "../db.js";

export async function listApplications(req, res) {
  try {
    const result = await query(`
      SELECT b.id, b.status, b.kanal, b.bewerbungsdatum, b.rueckmeldung_bis, b.notizen,
             p.vorname, p.nachname, u.firmenname
      FROM bewerbungen b
      JOIN person p ON b.person_id = p.id
      JOIN potpraktikum u ON b.potpraktikum_id = u.id
      ORDER BY b.id ASC
    `);
    res.render("applications/list", { items: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Fehler beim Abrufen der Bewerbungen");
  }
}

export function newApplication(req, res) {
  res.render("applications/form", { values: {}, edit: false });
}

export async function showApplication(req, res) {
  try {
    const result = await query(`
      SELECT b.*, p.vorname, p.nachname, u.firmenname
      FROM bewerbungen b
      JOIN person p ON b.person_id = p.id
      JOIN potpraktikum u ON b.potpraktikum_id = u.id
      WHERE b.id = $1
    `, [req.params.id]);

    if (result.rows.length === 0) return res.status(404).send("Bewerbung nicht gefunden");
    res.render("applications/show", { item: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("Fehler beim Abrufen der Bewerbung");
  }
}