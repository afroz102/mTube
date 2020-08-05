import React from 'react';
import VideoListItem from './VideoListItem'
import { CardDeck } from 'reactstrap';

const Videos = ({ videos, mode = "trending" }) => {
    // console.log("videos: ", videos);
    if (videos) {
        return (
            <CardDeck>
                {videos.map(video => (
                    <VideoListItem key={mode === "trending" ? video.id : video.id.videoId} video={video} mode={mode} />
                ))}
            </CardDeck>
        )
    } else {
        return null;
    }
}

export default Videos;
