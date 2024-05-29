import React from "react";
import PropTypes from "prop-types";

const VideoGall = (props) => {
  return (
    <div className="col-md-4">
      <div className="mb-4">
        <video className="img-fluid" controls alt="Actuación">
          <source src={props.videoUrl} type="video/mp4" />
          Tu navegador no soporta el video HTML5.
        </video>
      </div>
    </div>
  );
};

VideoGall.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoGall;
