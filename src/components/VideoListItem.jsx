import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom'

// to limit the content of description if it wxceeds the length
const limitDescritionContent = (description, letterCount) => {
    return description.length <= letterCount ? description : `${description.slice(0, letterCount)}...`;
}

const VideoListItem = ({ video, mode }) => {
    return (
        <Card style={{ flexBasis: "300px", marginBottom: "20px" }}>
            <Link
                to={`/videos/${mode === "search" ? video.id.videoId : video.id}`}
                style={{ color: "inherit", textDecoration: "none" }} >

                <CardImg
                    top width="100%"
                    src={video.snippet.thumbnails.high.url}
                    alt="video thumbnail"
                />
                <CardBody>
                    <CardTitle><b>Title: {video.snippet.title}</b></CardTitle>
                    <CardSubtitle>
                        <small>
                            <strong> {video.snippet.channelTitle} </strong>
                        </small>
                    </CardSubtitle>
                    <CardText>
                        <small>
                            ${limitDescritionContent(video.snippet.description, 100)}
                        </small>
                    </CardText>
                </CardBody>
            </Link>
        </Card>
    );
}

export default VideoListItem
