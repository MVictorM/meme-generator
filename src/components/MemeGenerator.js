import React, {Component} from "react"
import {Button, InputGroup, FormControl }from 'react-bootstrap';

class MemeGenerator extends Component {
    //creating state as class variable, we don't need the constructor anymore
    state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({ allMemeImgs: memes });
            });
    }
    //Using arrow functions, we don't need to bind this in constructor
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({ randomImg: randMemeImg });
    };

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-bottomText">Bottom text</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            name="topText"
                            value={this.state.topText}
                            onChange={this.handleChange}
                        />
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-topText">Top text</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            name="bottomText"
                            value={this.state.bottomText}
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button type="submit" variant="outline-secondary">Gen</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator