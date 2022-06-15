
import React,{useState} from 'react'



export default function TextForms(props) {
    const [text,setText]=useState("Please enter your text !");

    const handleUpClick=()=>{
        // console.log("i was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clear=()=>{
        setText("");
    }

    const handleExtraSpaces=()=>{
       let newText=text.split(/[ ]+/);    
       setText(newText.join(" "))
    }

    const firstCapital=()=>{
        let text1=text.split(/[ ]+/);
        for(var i=0;i<text1.length;i++){
            text1[i][0].toUpperCase();
        }
        setText(text1.join(" "))
    }

  return (
    <>
        <div className="mb-3"> 
            <h3><i>{props.heading}</i></h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>

            <button className="btn btn-info my-3 mx-2" onClick={handleUpClick}>Convert to upperCase</button>
            <button className="btn btn-info my-3 mx-2"  onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-info mx-2" onClick={clear}>Clear</button>
            <button className="btn btn-info mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            <button className="btn btn-info mx-2" onClick={firstCapital}>first letter Capital</button>
        </div>
        <div className="contaier">
            <p>{text.length} characters and {text.split(" ").length} words </p>
      
        </div>
    </>
  )
}
