import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import morgan from "morgan";
import methodOverride from "method-override";
import expressLayouts from "express-ejs-layouts";

import personsRouter from "./routes/persons.js";
import companiesRouter from "./routes/companies.js";
import applicationsRouter from "./routes/applications.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "..", "public")));

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout");

app.get("/", (req, res) => {
  res.render("index", { title: "Praktikumsverwaltung" });
});

app.use("/persons", personsRouter);
app.use("/companies", companiesRouter);
app.use("/applications", applicationsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));