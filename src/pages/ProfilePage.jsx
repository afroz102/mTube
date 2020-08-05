import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const ProfilePage = ({ user }) => {
    // console.log("user in profile: ", user)
    return user ? (
        <Jumbotron className="mx-auto text-center">
            <img
                src={user.imageUrl}
                alt="profile pic"
                style={{ width: 150, height: 150, borderRadius: "50%" }}
            />
            <h1 className="display-3">{user.name}</h1>
            <p className="lead">Email: {user.email}</p>

            <hr className="my-2" />
            <p className="lead">
                <Link to="/playlists">
                    <Button color="primary">View Playlist</Button>
                </Link>
            </p>
        </Jumbotron>
    ) : (
            <Redirect to="/login" />
        );
}

const mapStateToProps = (storeState) => {
    return {
        user: storeState.userState.user
    }
};

export default connect(mapStateToProps)(ProfilePage);
