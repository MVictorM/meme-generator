import React from 'react';

function Contact(props) {
    return (
        <div>
            {/*prop diretamente no componente*/}
            {/*<p>Prop name: {props.name}</p>*/}
            {/*<p>Prop phone: {props.phone}</p>*/}
            {/*exemplo prop vindo de um json*/}
            <p>Prop name: {props.contact.name}</p>
            <p>Prop phone: {props.contact.phone}</p>
        </div>
    );
}

export default Contact;
