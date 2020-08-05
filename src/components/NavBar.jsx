import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';
import { keys } from '../config';
import { connect } from 'react-redux';
import { logOutUser } from '../redux/actions/userAction'


const mTubeNabBar = (props) => {

    const handleLogoutSuccess = () => {
        console.log("logout success response: ");
        alert("SUCCESSFULLY LOGGED OUT!");
        props.logOutUser();
    }

    const handleLogoutFailure = (err) => {
        console.error("logout error response: ", err);
    }

    return (
        <div className="==">
            <Navbar color="light" light expand="md">

                <Link to="/"> HomePage</Link>


                <Nav className="ml-auto" navbar>
                    {(!props.user) ? (
                        <NavItem>
                            <NavLink className="" to="/login/">Login</NavLink>
                        </NavItem>) : (
                            <>
                                <NavItem className="mr-2 my-2">
                                    <NavLink className="mt-2" to="/profile/">Profile</NavLink>
                                </NavItem>

                                <NavItem className="mr-2 my-2">
                                    <NavLink className="mt-2" to="/playlists/">My Playlists</NavLink>
                                </NavItem>

                                <GoogleLogout
                                    clientId={keys.CLIENT_ID}
                                    buttonText="Logout"
                                    onLogoutSuccess={handleLogoutSuccess}
                                    onFailure={handleLogoutFailure}
                                />
                            </>
                        )}
                </Nav>
            </Navbar>
        </div >
    );
}

const mapStateToProps = (storeState) => {
    return {
        user: storeState.userState.user
    };
}

export default connect(mapStateToProps, { logOutUser })(mTubeNabBar);

