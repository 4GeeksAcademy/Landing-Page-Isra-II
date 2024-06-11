import React from "react";
import { galleryData } from "../galleryData.js";
import VideoGall from "./VideoGall.jsx";

const Gallery = () => {
  return (
    <section className="gallery py-5 text-center">
      <div className="container">
        <h2>Galería</h2>
        <div className="row">
          {galleryData.map((video) => (
            <VideoGall videoUrl={video.videoUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
