import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { keys } from '../config';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/userAction'
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';


const LoginPage = ({ user, setUser }) => {

    const responseGoogle = (response) => {
        if (response.erro) {
            console.log("googleResponse: ", response.error);
        }

        setUser({ ...response.profileObj, ...response.tokenObj });
    }

    if (user) {
        return <Redirect to='/' />
    }

    return (
        <Row className="mx-auto mt-5">
            <Col md={{ size: 2, offset:5}}>
                <GoogleLogin
                    className="ml-4"
                    clientId={keys.CLIENT_ID}
                    buttonText="Login"
                    isSignedIn={true}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    scope="https://www.googleapis.com/auth/youtube"
                    cookiePolicy={'single_host_origin'}
                />
            </Col>
        </Row >
    )
}

const mapStateToProps = (storeState) => {
    return {
        user: storeState.userState.user
    }
}

export default connect(mapStateToProps, { setUser })(LoginPage);