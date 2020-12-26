import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";
import "./another.scss";

export default function VideoAnother(props) {
  const playerRef = React.useRef();

  React.useEffect(() => {
    const player = videojs(playerRef.current, { autoplay: false, muted: false, controls: true }, () => {
      player.src("/assets/example-video.mp4");
    });

    return () => {
      player.dispose();
    };
  }, []);

  return (
    <div className="new-video" ref={props?.refProp}>
      <div data-vjs-player>
        <video ref={playerRef} className="video-js vjs-16-9 vjs-big-play-centered vjs-custom" playsInline />
      </div>
    </div>
  );
}
