import React, {props} from 'react';
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
    
export default Home;
