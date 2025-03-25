import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase eas clicked "+text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case!", "success")
  };
  const handlelwClick = () => {
    let lwText = text.toLowerCase();
    setText(lwText);
    props.showAlert("Converted to Lower case!", "success")
  };
  const handleOnChange = (event) => {
    // console.log("onChange")
    setText(event.target.value); //concat the user text
  };
  const handleInverseClick = () => {
    let invertedText = text
      .split("") // Split the text into an array of characters
      .map((char) => {
        // Invert the case for each character
        return char === char.toLowerCase()
          ? char.toUpperCase()
          : char.toLowerCase();
      })
      .join(""); // Join the characters back into a string

    setText(invertedText); // Update the state with the new string
    props.showAlert("Converted to Inverse case!", "success")
  };

  const handleDownloadClick = () => {
    const element = document.createElement("a"); // Create a download link
    const file = new Blob([text], { type: "text/plain" }); // Create a file with the text
    element.href = URL.createObjectURL(file); // Create a link to the file
    element.download = "myFile.txt"; // Set the file name
    element.click(); // Simulate a click to download the file
    props.showAlert("Downloaded successfully!", "success")
  };
  
  

  const handleCtClick = () => {
    setText("");
    props.showAlert("Cleared!", "success")
  };

  const handleCapClick = () => {
    let splitText = text.split(" "); // Split text into words
    let capitalizedText = splitText.map((word) => {
      //map look through each word in array
      return word.charAt(0).toUpperCase() + word.slice(1);
    }); // Capitalize each word
    setText(capitalizedText.join(" ")); // Join the words back into a sentence
    props.showAlert("Capitalized successfully!", "success")
  };

  const [text, setText] = useState("");
  //setText("new Text");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} //taky type krrsken
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length ===0} className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handlelwClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>
          Convert to Capital case
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleInverseClick}>
          Convert to Inverse case
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleDownloadClick}>
          Download Text
        </button>
        <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleCtClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split("").filter((char) => char !== " ").length} characters          characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}