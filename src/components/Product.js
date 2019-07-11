import React from 'react'

function Product(props) {
    return <div>
        <h3>{props.name}</h3>
        <p>{props.price.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})}</p>
        <p>{props.description}</p>
    </div>
}

export default Product;