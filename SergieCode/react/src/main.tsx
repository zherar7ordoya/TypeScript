import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css"; // Importing a CSS file for styles
import { TodoApp } from "./components/TodoApp";

createRoot(document.getElementById("root")!).render
(
    <StrictMode>
        <TodoApp />
    </StrictMode>,
);
