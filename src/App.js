import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform';
import About from './components/About'
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {

  const [mode,setmode]= useState('light');
 const[textt,settextcolor]= useState('enable dark mode');
 const[mystylo,setmystylo]=useState('light');
 const[alert,setalert]=useState(null);

 const showalert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })

  setTimeout(()=>{
setalert(null);
  },2000);
 }
  const togglemode =()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      settextcolor('enable lightmode');
      document.body.style.backgroundColor='black';
      showalert("Dark mode enabled","success");
      document.title="Text utils- dark mode"

    }
    else{
      setmode('light');
      settextcolor('enable darkmode');
      document.body.style.backgroundColor='white';
      showalert("Light mode enabled","success");
      document.title="Text utils- light mode"
    }

  }
  return (
      <>
         
<Navbar title="Text" aboutText="About" mode={mode} togglemode={togglemode} />
<div className="container">

<Alert alert={alert} mode={mode}/>
<Textform showalert={showalert} heading="Enter text to analyze "  mode={mode}/>

</div>
      </>
  );
};

export default App