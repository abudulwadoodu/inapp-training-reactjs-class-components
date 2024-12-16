import React, { Component } from "react";

class RandomTexts extends Component {
    render() {
        return (
            <div className="component2">
                <h1>Random Texts</h1>
                <ul>
                    {this.props.randomTexts.map((text, index) => (
                        <li key={index}>{text}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RandomTexts;