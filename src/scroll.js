import React from "react";
import VideoAnother from "./video-another";

export default function Scroll() {
  const item = React.useRef();

  React.useEffect(() => {
    item?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="container">
      <h1>Hello world</h1>
      <VideoAnother />
      <VideoAnother />
      <VideoAnother />
      <VideoAnother />
      <VideoAnother />
      <VideoAnother />
      <VideoAnother refProp={item} />
    </div>
  );
}
