import React from 'react';
import { Jumbotron } from 'reactstrap';

const VideoPlayer = ({ video: { items: [currentVideo] } }) => {
    // console.log("video in videoplayer page: ", currentVideo);

    const { likeCount, dislikeCount, viewCount } = currentVideo.statistics;

    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title="video" src={`https://www.youtube.com/embed/${currentVideo.id}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {/* <iframe class="embed-responsive-item" src="..."></iframe> */}
            </div>
            <Jumbotron>
                <h1 className="display-6" style={{ fontSize: "25px" }}>{currentVideo.snippet.title}</h1>
                <p className="lead">{currentVideo.snippet.channelTitle}</p>
                <hr className="my-4" />

                <p>{currentVideo.snippet.description}</p>

                <p className="lead">
                    <small className="mx-3"><b>Views: </b>{viewCount},</small>
                    <small className="mx-3"><b>Likes: </b>{likeCount},</small>
                    <small className="mx-3"><b>Dislikes: </b>{dislikeCount}</small>
                </p>

            </Jumbotron>
        </>
    )
}

export default VideoPlayer;
