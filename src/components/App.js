import React from 'react';
import Product from "./Product";
import productsData from "./productsData";

//arrow function
function App() {
    const productComponents = productsData.map(item =>
        <Product key={item.id} name={item.name} description={item.description} price={item.price}/>
        );
    return <div>
        {productComponents}
    </div>;
}

export default App;
