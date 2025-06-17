import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap-grid.min.css";

import "./assets/css/index.css";

// import * as bootstrap from "bootstrap";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
