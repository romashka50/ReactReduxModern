import React from 'react';

const VideoItem = ({ video, onSelectVideo }) => {
  const {
    snippet: {
      thumbnails: {
        default: { url }
      },
      title,
    }
  } = video;

  return (
    <li
      className="list-group-item"
      onClick={() => {onSelectVideo(video)}}
    >
      <div className="video-list media" >
        <div className="media-left" >
          <img alt="" className="media-object" src={url} />
        </div>

        <div className="media-body" >
          <div className="media-heading" >
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;