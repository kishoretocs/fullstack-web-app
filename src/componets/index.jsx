import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Assignemnt } from "./screens/Assignemnt";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Assignemnt />
  </StrictMode>,
);
