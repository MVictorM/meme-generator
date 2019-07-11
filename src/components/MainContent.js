import React from 'react';
import MyInfo from './MyInfo';
import ToDo from "./ToDo";

//declaracao normal da funcao
function MainContent() {
  return (
    <div className="MainContent">
      <MyInfo/>
      <ToDo/>
    </div>
  );
}

export default MainContent;
