// src/components/sidebar/Seder.jsx
import "./sidebar.css";
import { useState } from "react";

export const Seder = () => {
  const [active, setActive] = useState("inicio");

  return (
    <aside className="sidebar">
      <header className="sidebar-header">
        <h2>Mi App</h2>
      </header>
      <nav>
        <ul>
          <li
            className={active === "inicio" ? "active" : ""}
            onClick={() => setActive("inicio")}
          >
            <a href="#inicio">Inicio</a>
          </li>
          <li
            className={active === "servicios" ? "active" : ""}
            onClick={() => setActive("servicios")}
          >
            <a href="#servicios">Servicios</a>
          </li>
          <li
            className={active === "contacto" ? "active" : ""}
            onClick={() => setActive("contacto")}
          >
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
