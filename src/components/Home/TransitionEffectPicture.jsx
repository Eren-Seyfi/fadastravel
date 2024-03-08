"use client";
import { useEffect, useRef } from "react";

const TransitionEffectPicture = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = () => {
      if (video.paused) {
        video.play();
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    playVideo(); // Videoyu ilk başta oynatmak için

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <video ref={videoRef} className="w-full h-full" muted loop>
      <source src="Untitleddesign.mp4" type="video/mp4" />
    </video>
  );
};

export default TransitionEffectPicture;
