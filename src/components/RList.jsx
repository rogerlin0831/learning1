import React from 'react'
import Person from "../components/Person";
import EditList from '../components/EditList'
import PropTypes from 'prop-types';

const RList = ({personList,addPerson,deletePerson, editEnable, editCallback}) => {

    return (
        <div className ="RList">
            List:&nbsp;&nbsp;&nbsp;            
            <button type="button" onClick={editCallback} style={{backgroundColor:editEnable?'red':'green', color:'white'}} >{editEnable?'exit edit':'edit'}</button>
            { editEnable && <EditList addListCall={addPerson}></EditList> }
            { personList.length > 0 ?
                personList.map( person=>
                    <Person key={person.id} _data={person} onDelete={deletePerson} editEnable={editEnable}></Person>
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
