import React from "react";
import { useVideo } from "../../context/VideoContext";
const Player = () => {
  const { videoId } = useVideo();
  return (
    <div>
      <iframe
        className="aspect-video"
        width="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
