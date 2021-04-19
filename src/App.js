import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";
import ListaRecetas from "./components/ListaRecetas";
import ModalContext from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalContext>
          <Header />

          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalContext>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
//no importa si <CategoriasProvider> rodea a <RecetasProvider>, no importa el orden
//lo que importa es que las etiquetas se cierren correctamente
