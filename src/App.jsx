import React, { useState } from "react";
import NavBar from "./Componentes/NavBar.jsx";
import BodyComponent from "./Componentes/BodyComponent.jsx";

function App() {
  return (
    <div className="text-center">
      <NavBar />
      <BodyComponent />
    </div>
  );
}

export default App;
