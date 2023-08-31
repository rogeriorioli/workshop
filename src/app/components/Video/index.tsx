import React from "react";

import styles from "./styles.module.css";

const Video: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.responsiveFrame}
        width="100%"
        height="350"
        loading="lazy"
        src="https://www.youtube.com/embed/qG394_8FmCc"
        title="Iniciando um projeto NodeJs , Express com Typescript [PART 1]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Video;
