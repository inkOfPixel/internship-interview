import React from 'react'

const Form = () => {
    return (
        <form action="">
            <label htmlFor="newItem">Nuovo item</label>
            <input type="text" name="newItem" id="newItem"/>
            <button>Add</button>     
        </form>
    )
}

export default Form;