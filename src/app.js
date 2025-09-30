import express from "express";
import path from "path";
import expressLayouts from "express-ejs-layouts";

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Statische Dateien (CSS, JS, Bilder)
app.use(express.static(path.join(process.cwd(), "public")));

// EJS + Layouts
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

// Beispielrouten
app.get("/", (req, res) => {
  res.render("index", { title: "Dashboard" });
});

app.get("/persons", (req, res) => {
  res.render("persons", { title: "Personen" });
});

app.get("/companies", (req, res) => {
  res.render("companies", { title: "Unternehmen" });
});

app.get("/applications", (req, res) => {
  res.render("applications", { title: "Bewerbungen" });
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});
