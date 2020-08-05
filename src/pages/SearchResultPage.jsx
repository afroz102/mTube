import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchVideos } from '../redux/actions/videoAction';
import Videos from '../components/Videos';

class SearchResultPage extends Component {

    componentDidMount() {
        // console.log("component did mount(props) :", this.props);
        const searchQuery = this.props.match.params.searchQuery;
        this.props.fetchSearchVideos(searchQuery);
    }

    componentDidUpdate(prevProps) {
        const prevSearchQuery = prevProps.match.params.searchQuery;
        const newSearchQuery = this.props.match.params.searchQuery;
        if (prevSearchQuery === newSearchQuery) {
            console.log("Same search query. Do not update.");
        } else {
            this.props.fetchSearchVideos(newSearchQuery);
        }
    }

    render() {

        return (!this.props.videos) ? (<h1 className="text-center">Loading videos...</h1>) : (
            <Videos videos={this.props.videos.items} mode="search" />
        )

    }

}

const mapStateToProps = (storeState) => {
    // console.log("storeState: ", storeState)
    return {
        videos: storeState.videoState.videos
    }
}

export default connect(mapStateToProps, { fetchSearchVideos })(SearchResultPage);