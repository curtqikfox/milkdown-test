// import { StrictMode } from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement) as any;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
