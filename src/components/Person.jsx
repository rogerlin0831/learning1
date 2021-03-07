import React from 'react'
import PropTypes from 'prop-types';



const Person = ( {_data} ) => {
    
    return (
        <div style={{color: _data.isWin?'red':'black'}}>
            { _data.isWin ? 
                <>win </>
                : 
                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
            }
            id:{_data.id}
            &nbsp;&nbsp;&nbsp;
            name:{_data.name}
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
