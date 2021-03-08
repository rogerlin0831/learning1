import Header from '../components/Header'
import TimeCount from '../components/TimeCount'
import RList from '../components/RList'
import About from '../components/About'
import Footer from "../components/Footer";

import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {

  const [editEnable, setEditEnable] = useState(false)
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

  // about timeCount.
  /**
   * 確認某個倒楣鬼.
   */
  const shootRandom = () => {
    let who = getwinid();
    console.log('who is', who);

    setpersonList(personList.map(person=>( person.id === who ? { ...person, isWin: true } : person )));
  }
  /**
   * 開新局.
   */
  const newRound = () => {
    setpersonList(personList.map(person=> ( {...person,isWin : false} ) 
    ) );    
    return ( personList.length > 0 );
  }
  /**
   * 取得隨機數.
   */
  const getwinid = () => {
    let win_index = Math.floor(Math.random() * Math.floor(personList.length));
    return personList[win_index].id;
  }

  //
  const editCallback = () => {
    setEditEnable(!editEnable);
    newRound();
  }

  // about personList.
  /**
   * add person
   */
  const addPerson = (name) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const iswin = false;
    const newPerson = { id, name, iswin }
    setpersonList([...personList, newPerson])
  }
  /**
   * delete person
   */
  const deletePerson = (id) => {
    setpersonList(personList.filter(personList => personList.id !== id));
  }

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route
          path="/"
          exact
          render={props => (
            <>
              { !editEnable && <TimeCount onTime={shootRandom} newRound={newRound}></TimeCount>  }
                            
              <RList personList={personList} addPerson={addPerson} deletePerson={deletePerson} editEnable={editEnable} editCallback={editCallback}/>              
            </>
          )
        }
        />
        <Route path="/about" component={About} />
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
