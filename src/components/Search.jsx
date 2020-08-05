import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Search extends Component {

    state = {
        searchQuery: ""
    }

    handleChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push(`/search/:${this.state.searchQuery}`)
    }

    render() {
        return (
            <form style={{ width: "60%" }} className="input-group my-5 mx-auto" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    name="searchQuery"
                    onChange={this.handleChange}
                />
                <div className="input-group-append">
                    <input
                        className="btn btn-outline-secondary"
                        type="submit"
                        value="Search"
                    />
                </div>
            </form>
        )
    }
}

// higher order components (usign withRouter)
export default withRouter(Search);