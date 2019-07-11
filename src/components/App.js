import React from 'react';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Contact from "./Contact";

//arrow function
const App = () =>
    <div>
      <Header/>
      <MainContent/>
      {/*prop diretamente no componente*/}
      {/*<Contact*/}
      {/*  name="teste"*/}
      {/*  phone="(81)99808-8444"*/}
      {/*/>*/}
      {/*exemplo simulando dados vindos de json armazenados em contact*/}
        <Contact
            contact={{name:"teste",
                phone:"(81)99808-8444"}}

        />
      <Footer/>
    </div>;

export default App;
