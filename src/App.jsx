import React, { useState } from "react";
import NavBar from "./NavBar.jsx";
import BodyComponent from "./BodyComponent.jsx";

function App() {
  return (
    <div className="text-center">
      <NavBar />
      <BodyComponent />
    </div>
  );
}

export default App;
