import React from "react";
import "./VideoListItem.css";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img alt={title} src={imgUrl} className="ui image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};
export default VideoListItem;
