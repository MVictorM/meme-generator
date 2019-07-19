import React, {Component} from "react"
import {InputGroup, FormControl, DropdownButton, Dropdown }from 'react-bootstrap';

class MemeGenerator extends Component {
    //creating state as class variable, we don't need the constructor anymore
    state = {
        topText: "",
        bottomText: "",
        imgUrl: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: [],
        memeSelected: '',
        loading: true
    };

    options = {};

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data;
                this.setState({ allMemeImgs: memes, memeSelected: memes[0]['name'], imgUrl: memes[0]['url'], loading: false });
            });
    }
    //Using arrow functions, we don't need to bind this in constructor
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    };

    setUrlImage = (event) => {
        // this.setState({ imgUrl: 'aaa' });
        console.log(event);
    };

    render() {
        this.options = this.state.allMemeImgs.map((item, key) =>
            <Dropdown.Item key={key} url={item.url} onClick={this.setUrlImage}>{item.name}</Dropdown.Item>
        );
        return (
            <div>
                <form className="meme-form">
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
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={this.state.memeSelected}
                            id="input-group-dropdown"
                            style={{display: this.state.loading ? 'none' : 'block'}}
                        >
                            {this.options}
                        </DropdownButton>
                    </InputGroup>
                </form>
                <div className="meme">
                    <img src={this.state.imgUrl} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator