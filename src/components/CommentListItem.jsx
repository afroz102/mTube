import React, { Component } from 'react';
import { Collapse, Button } from 'reactstrap';
import Replies from './Replies';

class CommentListItem extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {
            snippet: { topLevelComment },
            replies
        } = this.props.comment;

        return (
            <div style={{ border: "1px solid black", marginBottom: "10px", padding: "10px" }}>
                <span>
                    <img
                        style={{ borderRadius: "50%", width: 30, height: 30 }}
                        src={topLevelComment.snippet.authorProfileImageUrl}
                        alt=""
                    />
                    <span className="mx-2"><b> {topLevelComment.snippet.authorDisplayName}</b></span>
                </span>
                <p>
                    <small className="mt-1">Comment: {topLevelComment.snippet.textOriginal}</small>
                </p>


                {replies !== undefined ? (
                    <>
                        <Button style={{border: "None"}} onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
                            {this.state.open ? "Close replies" : "show replies..."}
                        </Button>
                        <Collapse isOpen={this.state.isOpen}>
                            <Replies replies={[]} />
                        </Collapse>
                    </>
                ) : null
                }
            </div>
        )
    }
}


export default CommentListItem;