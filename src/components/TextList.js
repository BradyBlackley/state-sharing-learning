import React, {useState} from 'react';
import TextAdder from './TextAdder';
import '../styles/TextList.css';

function TextList () {
    const [list, setList] = useState([]);

    const addListItem = function (item) {
        setList([...list, item])
    }

    return (
        <div className="textList">
            <div className="listHeader">
                <h1>Text List Component</h1>
            </div>
            <div className="listItemHeader">
                <h2>List Items</h2>
            </div>
            <div className="listArea">
                <ul>
                    {list.map(i => <li>{i}</li>)}
                </ul>
            </div>
            <TextAdder number={1} addListItem={addListItem}/>
            <TextAdder number={2} addListItem={addListItem}/>
        </div>
    );
}

export default TextList;