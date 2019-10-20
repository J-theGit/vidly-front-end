import React, { Component } from "react";
class Like extends Component {
    render() {
        return (
            <i
                className={this.formatHeart()}
                onClick={() => this.props.onToggleLike(this.props.id)}
                aria-hidden="true"
            ></i>
        );
    }
    formatHeart = () => {
        return this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
    };
}

export default Like;
