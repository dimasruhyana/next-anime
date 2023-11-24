"use client";

import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }: any) => {
  const [isOpen, setIsOpen] = useState(true);
  ("");
  const handlePlayer = () => {
    setIsOpen((preState) => !preState);
  };

  const option = {
    width: "300",
    height: "200",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="float-right dark:bg-white bg-dark dark:text-dark text-white px-3 mb-1"
          onClick={() => handlePlayer()}>
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken, try another video")}
        />
      </div>
    );
  };

  const OpenButtonPlayer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 w-32 bg-dark text-white hover:bg-accent dark:bg-white dark:text-dark dark:hover:bg-accent dark:hover:text-white"
        onClick={() => handlePlayer()}>
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <OpenButtonPlayer />;
};

export default VideoPlayer;
