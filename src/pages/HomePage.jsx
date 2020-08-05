import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTrendingVideos } from '../redux/actions/videoAction';
import Videos from '../components/Videos';

class HomePage extends Component {

    componentDidMount() {
        // console.log("component did mount(props) :", this.props);
        this.props.fetchTrendingVideos();
    }

    render() {
        // console.log("Props in Homepage : ", this.props);
        if (!this.props.user) {
            return <Redirect to="/login" />
        }
        return (!this.props.videos) ? (<h1 className="text-center">Loading...</h1>) : (
            <Videos videos={this.props.videos.items} />
        )

    }

}

const mapStateToProps = (storeState) => {
    // console.log("storeState: ", storeState)
    return {
        user: storeState.userState.user,
        videos: storeState.videoState.videos
    }
}

export default connect(mapStateToProps, { fetchTrendingVideos })(HomePage);
