import Header from '../components/Header'
import TimeCount from '../components/TimeCount'
import RList from '../components/RList'
import About from '../components/About'
import Footer from "../components/Footer";

import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
    console.log(personList.length > 0 );
    return ( personList.length > 0 );
  }

  const getwinid = () => {
    let win_index = Math.floor(Math.random() * Math.floor(personList.length));
    return personList[win_index].id;
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
              <TimeCount onTime={shootRandom} newRound={newRound}></TimeCount>
              <RList personList={personList}/>
            </>
          )
        }
        />
        <Route path="/about" component={About} />
        <Route
          path="/"
          exact
          render={props => (
            <>
              <Footer></Footer>
            </>
          )
        }
        />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
