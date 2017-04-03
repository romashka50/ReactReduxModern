import React from 'react';

const VideoItem = ({ video }) => {
  const {
    snippet: {
      thumbnails: {
        default: { url }
      },
      title,
    }
  } = video;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img alt="" className="media-object" src={url}/>
        </div>
      </div>

      <div className="media-body">
        <div className="media-heading">
          {title}
        </div>
      </div>
    </li>
  );
};

export default VideoItem;