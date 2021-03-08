import React from 'react'
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';


const Person = ( {_data, onDelete, editEnable} ) => {

    function padLeft(str,lenght){
        if(str.length > lenght)
        return str;
        else
        return padLeft("0" +str,lenght);
    }

    return (
        <div style={{color: _data.isWin?'red':'black'}}>
            { _data.isWin ? 
                <>win </>
                : 
                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            }
            id:{padLeft(_data.id,5)}
            &nbsp;&nbsp;&nbsp;
            
            name:{_data.name}
            {editEnable && <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={ ()=>onDelete(_data.id)}></FaTimes>}
        </div>
    )
}


Person.defaultProps = {
    _data: { },
}

Person.propTypes = {
    _data: PropTypes.object,
}

export default Person
