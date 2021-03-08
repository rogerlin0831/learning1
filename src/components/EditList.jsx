import { useState } from 'react';

const EditList = ( {addListCall} ) => {

    const [name, setName] = useState('');

    const inputChange = (event) => {
        setName(event.target.value);
    }
    
    const addCallback = () => {
        console.log(name);
        if( name ) {
            addListCall(name);
            setName('');
        } else {
            alert('Enter name')
        }
        
    }

    return (
        
        <div>
            <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new</h4>
            ==================
            <br></br>            
            name:
            <input type="text" value={name} onChange={inputChange} ></input>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" onClick={ addCallback } >add</button>
            <br></br>
            ==================
        </div>
    )
}

export default EditList
