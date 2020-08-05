import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments, fetchVideo } from '../redux/actions/currentVideoAction'
import VideoPlayer from '../components/VideoPlayer';
import Comments from '../components/Comments';


class VideoDetails extends Component {

    componentDidMount() {
        
        // if (this.props.match.params.videoId === undefined) {
        //     return alert("Video not found!!");
        // }

        this.props.fetchComments(this.props.match.params.videoId);
        this.props.fetchVideo(this.props.match.params.videoId);
    }

    render() {
        // console.log("currentVideo(videoDetailsPage): ", this.props);
        return (
            <div>
                {/* video Details */}
                {this.props.currentVideo ? (
                    <VideoPlayer video={this.props.currentVideo} />
                ) : (
                        <h1 className="text-center">Loading video...</h1>
                    )}

                {/* comments of the particlar video */}
                {this.props.comments ? (
                    <Comments comments={this.props.comments.items} />
                ) : (
                        <h1 className="text-center">Loading comments...</h1>
                    )}
            </div>
        )
    }
}
const mapStateToProps = (storeState) => {
    return {
        currentVideo: storeState.currentVideoState.video,
        comments: storeState.currentVideoState.comments
    }
}
export default connect(mapStateToProps, { fetchVideo, fetchComments })(VideoDetails);
