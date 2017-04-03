import React from 'react';
import VideoItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map(item => <VideoItem key={item.etag} video={item} />);

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;