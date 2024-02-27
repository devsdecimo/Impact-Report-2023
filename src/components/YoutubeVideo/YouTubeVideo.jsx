import React from 'react';
import { YoutubeVideoContainer } from './YouTubeVideo.styles';

const YouTubeVideo = ({videoId}) => {

  return (
    
    <YoutubeVideoContainer>
      <iframe

        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </YoutubeVideoContainer>
  );
};

export default YouTubeVideo;