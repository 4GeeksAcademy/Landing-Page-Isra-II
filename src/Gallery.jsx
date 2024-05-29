import React from "react";
import { galleryData } from "./galleryData.js";
import VideoGall from "./VideoGall.jsx";

const Gallery = () => {
  return (
    <section className="gallery py-5 text-center">
      <div className="container">
        <h2>Galería</h2>
        <div className="row">
          <VideoGall videoUrl="src/assets/Psi con Ruse Ayer.mp4" />
          <VideoGall videoUrl="src/assets/Todo dorsos.mp4" />
          <VideoGall videoUrl="src/assets/Harry and Bess.mp4" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
