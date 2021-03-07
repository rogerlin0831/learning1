import React from 'react'
import Person from "../components/Person";
import PropTypes from 'prop-types';

const RList = ({_personList}) => {

    console.log(_personList);

    return (
        <div className ="RList">
            List:
            { _personList.length > 0 ?
                _personList.map(person=>
                    <Person key={person.id} _data={person} ></Person>
                    )
                :
                <h3>No</h3>
            }
        </div>
    )
}

RList.defaultProps = {
    _personList: [],
}

RList.propTypes = {
    _personList: PropTypes.array,
}

export default RList
