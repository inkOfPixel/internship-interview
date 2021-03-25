import React from 'react';
import ReactDOM, { render } from 'react-dom';

export default function Home() { 
    return (
        <form action="">
            <label htmlFor="newItem">Nuovo item</label>
            <input type="text" name="newItem" id="newItem" onSubmit={this.addToDo}/>
            <input type="submit" value="add"></input>
            <input type="submit" value="show"></input>
            
        </form>
    )
}

