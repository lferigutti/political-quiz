import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import TestPolitico from "./pages/TestPolitico.tsx";
import Home from "./pages/Home.tsx";
import MainLayout from "./layout/MainLayout.tsx";
import Results from "./pages/Results.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/test-politico" element={<TestPolitico />} />
          <Route path="/resultado" element={<Results />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
 