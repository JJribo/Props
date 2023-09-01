import React, { Children, useState } from 'react';
import './App.css';
import Buttons from "./Button/Button";
import HTwo from "./Htwo/HTwo";
import Textfiled from "./TextField/Textfiled";
import Images from './Image/Images';


function App() {
  const [text, setText] = useState('');
  
  const handleButtonClick = () => {
    alert('Button Clicked');
  };

  const handleTextFieldChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <HTwo>My P2 Individual Activity</HTwo>
      
      <Textfiled id = "text-1" type="text" onChange={handleTextFieldChange} placeholder="Enter text"/>
      <Textfiled id = "text-1" type="text" onChange={handleTextFieldChange} placeholder="Enter text"/>
      <Textfiled id = "text-3" type="text" onChange={handleTextFieldChange} placeholder="Enter text"/>
      <Textfiled id = "text-4" type="text" onChange={handleTextFieldChange} placeholder="Enter text"/>
      <Buttons onClick={handleButtonClick} label="Cancel" id="button1"/>
      <Buttons onClick={handleButtonClick} label="Submit" id="button2"/>
      <div className='Imahe'>
      <Images src = "citeblack.png" alt = "cite Logo" id = "image1"/>
      <Images src = "citeblack.png" alt = "cite Logo" id = "image1"/>
      <Images src = "citeblack.png" alt = "cite Logo" id = "image2"/>
      <Images src = "citeblack.png" alt = "cite Logo" id = "image2"/>
      </div>
    </div>
  );
}

export default App;
