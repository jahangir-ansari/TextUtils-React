import React, { useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    console.log("UpperCase Clicked!! " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    console.log("LowerCase Clicked!! " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleRepClick = () => {
    console.log("Replicate Clicked!! " + text);
    let newText = text + " " + text;
    setText(newText);
    props.showAlert("Replicated successfully", "success");
  };

  const handleOnChange = (event) => {
    console.log("On Change IN FORM");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // const wordscount = text.split("").length;
  let charCount = text.trim().length;
  const wordscount = text
    .trim()
    .split(/\s+/)
    .filter((st) => st !== "").length;
  console.log(wordscount);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-danger mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2 my-1" onClick={handleRepClick}>
          Click to Replicate
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>your text summary</h1>

        <p>
          {wordscount} words and {charCount} characters
        </p>
        <p>{0.008 * text.split("").length} minutes to read </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter Something above to preview it here"}
        </p>
      </div>
    </>
  );
};

export default TextForm;
