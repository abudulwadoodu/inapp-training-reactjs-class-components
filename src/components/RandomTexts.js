import { Component } from "react";

class RandomTexts extends Component {

    constructor() {
        super();

        this.state = {texts: []};
    }

    componentDidMount() {
        const texts = Array.from({ length: 5 }, () => this.generateRandomText());
        this.setState({
            texts
        });
    }

    /**
     * Generates a random text string of a length between 8 and 64 characters.
     *
     * @returns {string} A randomly generated text string containing uppercase letters, lowercase letters, and digits.
     */
    generateRandomText() {
        const minLength = 8;
        const maxLength = 64;
        const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;        
    }

    render() {
        return(
            <div className="component2">
                <h1>Random Texts</h1>
                <div>
                    {this.state.texts.map((text, index) => (
                        <div key={index}>{index+1}. {text}</div>
                    ))}
                </div>
            </div>
        )
    }
}

export default RandomTexts