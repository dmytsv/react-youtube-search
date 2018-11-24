import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onVideoSelect, selectedVideo }) => {
  const renderedList = videos.map(video => (
    <VideoListItem
      onVideoSelect={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));
  return (
    <div className={selectedVideo ? "five wide column" : ""}>
      <div className="ui relaxed divided list">{renderedList}</div>
    </div>
  );
};

export default VideoList;
