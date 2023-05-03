import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RocketList from "./components/rocketList";
import Rocket from "./components/rocket";
import History from "./components/history";

import "./index.css";
import Launches from "./components/launches";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/history" element={<History />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/rockets" element={<RocketList />} />
        <Route path="/rockets/:id" element={<Rocket />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
