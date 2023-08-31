import React from "react";

import styles from "./styles.module.css";

const Video: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className="video"
        src="/chamada_ws.mov"
        controls
        poster="/poster.png"
      ></video>
    </div>
  );
};

export default Video;
