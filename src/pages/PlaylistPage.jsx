import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { fetchPlaylists, createPlaylist } from '../redux/actions/playlistActions'

class playlistPage extends Component {
    state = {
        privacyStatus: "",
        title: "",
        description: ""
    }

    componentDidMount() {
        this.props.fetchPlaylists();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { privacyStatus, title, description } = this.state;
        const playlist = {
            status: { 
                privacyStatus 
            },
            snippet: {
                description,
                title
            }
        };

        this.props.createPlaylist(playlist);
    };

    render() {
        // console.log("playlist render method: ", this.props)
        if (!this.props.user) {
            return <Redirect to="/login/" />;
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter your playlist title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter your playlist description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                    <select
                        name="privacyStatus"
                        onChange={this.handleChange}
                        value={this.state.privacyStatus}
                    >
                        <option value="" disabled>
                            Choose a status
                        </option>
                        <option value="public">Public</option>
                        <option value="unlisted">Unlisted</option>
                        <option value="private">Private</option>
                    </select>
                    <input type="submit" value="Create Playlist" />
                </form>

                {this.props.playlists && this.props.playlists.items ? (
                    this.props.playlists.items.map((playlist, index) => {
                        return (
                            <div key={index}> {JSON.stringify(playlist)}</div>
                        )
                    })
                ) : (
                        <h1 className="text-center">Loading...</h1>
                    )}
            </div>
        )
    }
}

const mapStoreToProps = (storeState) => {
    return {
        user: storeState.userState.user,
        playlists: storeState.playlistState.playlists
    }
}

export default connect(mapStoreToProps, { fetchPlaylists, createPlaylist })(playlistPage)
