import React ,{useState} from 'react'

export default function Textform(props) {
    //text ko update karna hai through settext function
// text ek variable hai 
//setText="jhbchdjb" --->for changing text w use setText
const upclick = ()=>
{
  console.log("uppercase conversion");
  setText("clicked button");
   let newtext=text.toUpperCase();
   setText(newtext);
   props.showalert("Converted to uppercase","success");
}
//txt area me text change ho sake isliye line no 19
const handleonclick = (event)=>
{
  console.log("on click"+text);
 
 setText(event.target.value);
 
  
}
const lowerclick=()=>
{
  console.log("converted to lowercase");
  let newlower=text.toLowerCase();
  setText(newlower);
  props.showalert("Converted to lower","success");
}

const clearclick=()=>
{
  let clear='';
  setText(clear);
  props.showalert("Text cleared","success");
}

const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}




const  handleBold = ()=>{
  var newText = document.getElementById('mytext');
  newText.style.fontWeight = 'bold';
}


const handleSaveClick = (e)=>{
  
  localStorage.setItem("Text",text);
}
const handleRetrieve = (e)=>{
  // console.log("save clicked");
  let a =localStorage.getItem("Text");
  setText(a); 
}



const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([text], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        element.click();
}
    const [text , setText]=useState('');
  return (
    <>
          <div className="container" style={{color: props.mode==='dark'?'white':'grey'}}>
            <h1>{props.heading}</h1>
           
          <div className="mb-3">
      
          <textarea className="form-control" value={text}  onChange={handleonclick} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id="mytext" rows="8"></textarea>
          </div>
      
          <button className="btn btn-primary"  onClick={upclick}> Convert to uppercase</button>
    
          <button className="btn btn-primary mx-2" onClick={lowerclick}> Convert to lowercase</button>

          <button className="btn btn-primary mx-2" onClick={clearclick}> Clear text</button>
          
          <button className="btn btn-primary mx-2 " onClick={speak}>Speak</button>

          <button className="btn btn-primary mx-2"  onClick={handleBold}>BOLD</button>
         

          <button className="btn btn-primary mx-2"  onClick={ handleSaveClick}>save</button>
          

          <button className="btn btn-primary mx-2"  onClick={ handleRetrieve}>retrieve</button>
          <button className='btn btn-primary mx-2' onClick={downloadTxtFile}>Download Text</button>


    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'grey'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p>{0.008 *text.split(" ").length}time to read this text </p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
  
}
