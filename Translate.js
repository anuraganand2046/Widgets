//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
const options= [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
];
const Translate = ()=>{
    const [language, setLanguage]= useState(options[0]);
    const [text, setText]= useState('');
    return (
        <div>
            <div className= "ui form">
            <div className= "field">
                <label>Enter the text</label>
                <input value= {text} onChange={(e)=> {setText(e.target.value)}} ></input>
            </div>
            </div>
            <Dropdown label= "Select a language" selected= {language} onSelectedChange= {setLanguage} options= {options}></Dropdown>
            <hr></hr>
            <h3 className= "ui header">Output</h3>
            <Convert text= {text} language= {language}></Convert>
        </div>
    );
};
export default Translate;