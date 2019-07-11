import React from 'react';
import Joke from './Jokes';

//arrow function
const App = () =>
    <div>
        <Joke
            question="O que é, o que é? Feito para andar e não anda."
            answer="A rua."
        />
        <hr />
        <Joke
            question="O que é, o que é? Dá muitas voltas e não sai do lugar."
            answer="O relógio."
        />
        <hr />
        <Joke
            question="O que é, o que é? Tem cabeça e tem dente, não é bicho e nem é gente."
            answer="O alho."
        />
        <hr />
        <Joke
            question="O que é, o que é? Não se come, mas é bom para se comer."
            answer="O talher."
        />
        <hr />
        <Joke
            question=""
            answer="Era uma vez um pintinho que não tinha perna, foi ciscar e caiu"
        />
    </div>;

export default App;
