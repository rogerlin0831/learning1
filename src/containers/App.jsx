import Header from '../components/Header'
import TimeCount from '../components/TimeCount'
import RList from '../components/RList';
import { useState, useEffect } from 'react';


function App() {

  const [personList, setpersonList] = useState([
    {
      id : 1,
      name : "POPO1",
      isWin : false,
    },
    {
      id : 2,
      name : "POP2",
      isWin : false,
    },
    {
      id : 3,
      name : "PO3",
      isWin : false,
    },
    {
      id : 4,
      name : "P4",
      isWin : false,
    },
  ]);

  /**
   * 確認某個倒楣鬼.
   */
  const shootRandom = () => {
    var who = getwinid();
    console.log('who is', who);

    setpersonList(personList.map(person=>( person.id === who ? { ...person, isWin: true } : person )));
  }

  /**
   * 開新局.
   */
  const newround = () => {
    setpersonList(personList.map(person=> ( {...person,isWin : false} ) 
    ) );
  }

  const getwinid = () => {
    var win_index = Math.floor(Math.random() * Math.floor(personList.length));
    return personList[win_index].id;
  }

  return (
    <div>
      <Header />
      <TimeCount _onTime={shootRandom} _newround={newround}></TimeCount>
      <RList _personList={personList}/>
    </div>
  );
}

export default App;
