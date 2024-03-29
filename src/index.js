import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Head from "./component/Head/Head.js";
import Nav from "./component/nav/Nav.js";
import Card from "./component/Card/Card.js";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
