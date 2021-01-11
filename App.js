import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate'
import Convert from './components/Convert';
import Route from './components/Route';
import Header from './components/Header';
const items= [
    {
        title: "What is react",
        content: "React is a front end user interface library"
    },
    {
        title: "Why use react",
        content: "React is used mostly because it is favorite among engineers"
    },
    {
        title: "How to use it",
        content: "Take udemy courses for that"
    }
];
const options= [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color green',
        value: 'green'
    }
];
export default ()=> {
    const [selected, setSelected]= useState(options[0]);
    return (
        <div>
           <Header></Header>
           <Route path='/'><Accordion items= {items}></Accordion> </Route>
           <Route path='/list'><Search></Search></Route>
           <Route path='/translate'><Translate></Translate></Route>
           <Route path='/dropdown'><Dropdown label= "Select a color" options={options} selected= {selected} onSelectedChange= {setSelected} ></Dropdown></Route>
        </div>
    );
};