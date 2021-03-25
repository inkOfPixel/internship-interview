import React, {props} from 'react';
import ReactDOM, { render } from 'react-dom';
import Item from '../Components/item'
import Form from '../Components/Form'

function Home() {
    return (
        <div className="TodoApp">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form />
        </div>       
    );
}
    


/*
function showItems(){
    return(
        <div className="container">
            <Item text="Primo item"/>
            <Item text="Secondo item"/>
        </div>
    )
}
*/
//export default Home;
export default Home;
