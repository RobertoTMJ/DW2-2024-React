import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Sobre } from "./pages/Sobre";
import { Pagina404 } from "./pages/Pagina404";
import { Layout } from "./pages/_Layout";
import { SemEstado } from "./pages/estado/semEstado";
import { ComEstado } from "./pages/estado/ComEstado";
import { CampoTexto } from "./pages/estado/CampoTexto";
import { CalcStep } from "./pages/estado/CalcStep";
import { ComunicacaoDireta } from "./pages/comunicacao/ComunicacaoDireta";
import { ComunicacaoIndireta } from "./pages/comunicacao/ComunicacaoIndireta";
import { UseRef } from "./pages/hoooks-basicos/UseRef";
import { UseEffect } from "./pages/hoooks-basicos/UseEffect";
import { Tradutor } from "./pages/exercicios/Tradutor";
import { Revisao } from "./pages/exercicios/Revisao";

// const rotas = createBrowserRouter([
//   {path:"/", element: <Home/>},
//   {path:"/home", element: <Home/>},
//   {path:"/contato", element: <Contato/>},
//   {path:"/sobre", element: <Sobre/>},
//   {path:"*", element: <Pagina404/>},
// ])

const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="semEstado" element={<SemEstado />} />
      <Route path="comEstado" element={<ComEstado />} />
      <Route path="campoTexto" element={<CampoTexto />} />
      <Route path="calcStep" element={<CalcStep />} />
      <Route path="comunicacaoDireta" element={<ComunicacaoDireta />} />
      <Route path="comunicacaoIndireta" element={<ComunicacaoIndireta />} />
      <Route path="useRef" element={<UseRef />} />
      <Route path="useEffect" element={<UseEffect />} />
      <Route path="tradutor" element={<Tradutor />} />
      <Route path="revisao" element={<Revisao />} />

      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={rotas} />
  /* </StrictMode> */
);
