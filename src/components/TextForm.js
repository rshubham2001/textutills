import React, { useState } from 'react';

export default function TextForm(props) {
    document.title = "TextUtils - Word counter | Character counter"

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        text.length > 0 ? props.showAlert("Converted to Upper case.", "success") : props.showAlert(" Enter some text to convert.", "warning");
    }
    const handledownClick = () => {
        let newText = text.toLocaleLowerCase();
        setText(newText);
        text.length > 0 ? props.showAlert("Converted to Lower case.", "success") : props.showAlert(" Enter some text to convert.", "warning");
    }
    const handlereverseClick = () => {
        let newText = [...text].reverse().join("");
        setText(newText);
        text.length > 0 ? props.showAlert("String is reversed.", "success") : props.showAlert(" Enter some text to convert.", "warning");
    }
    const handlecopyClick = () => {
        navigator.clipboard.writeText(text);
        text.length > 0 ? props.showAlert("Copied to clipboard.", "success") : props.showAlert(" Enter some text to copy.", "warning");
    }
    const handleclearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleonChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // Here 'text' is state variable which has initial value as " "And 'setText' is function which will change the value of 'text'.
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`} value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-primary MY-1 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handledownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handlereverseClick}>Reverse Text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handlecopyClick}>Copy to Clipboard</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleclearClick}>Clear Text</button>
            </div>
            <div className="container my-4">
                <h1>Your text summary.</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} letters</p>
                <p>Approximately it will take {0.00458 * (text && text.split(" ")).length} minutes to read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter in the Text box to preview it here."}</p>
            </div>

        </>
    )
}