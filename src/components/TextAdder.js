import React, {useState} from 'react';
import '../styles/TextAdder.css';

function TextAdder (props) {

    const[text, setText] = useState("");

    const handleSubmit = function (evt) {
        evt.preventDefault();
        props.addListItem(text);
        setText("");
    }

    return (
        <div className="textAdder">
            <h1 className="adderHeader">Text Adder {props.number}</h1>
            <form onSubmit={handleSubmit}>
                <div className="adderLabel">
                <label htmlFor="textAdderInput">Add an item</label>
                </div>
                <br/>
                <div className="adderInput">
                <input type="text" className="textAdderInput" value={text} onChange={evt=>setText(evt.target.value)}></input>
                <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}

export default TextAdder;