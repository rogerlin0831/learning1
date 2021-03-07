import React from 'react'
import Person from "../components/Person";
import PropTypes from 'prop-types';

const RList = ({personList}) => {

    return (
        <div className ="RList">
            List:
            { personList.length > 0 ?
                personList.map(person=>
                    <Person key={person.id} _data={person} ></Person>
                    )
                :
                <h3>No</h3>
            }
        </div>
    )
}

RList.defaultProps = {
    personList: [],
}

RList.propTypes = {
    personList: PropTypes.array,
}

export default RList
