import React from 'react';

function Joke(props) {
    return (
        <div>
            {/*Style condition*/}
            <p style={{display: props.question ? "block" : "none"}}>Question: {props.question}</p>
            <p>Answer: {props.answer}</p>
        </div>
    );
}

export default Joke;