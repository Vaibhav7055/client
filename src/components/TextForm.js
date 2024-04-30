import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!!", "success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!!", "success");
  };

  const handleClearClick = () => {
    // console.log("Uppercase was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!!", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied to Clipboard!!", "success");
  };

  const handleExtraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces are removed!!", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?"grey":'white', color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the text</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in above textbox to preview"}</p>
      </div>
    </>
  );
}
