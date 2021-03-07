import React from 'react'
import ShowTime from '../components/ShowTime'
import { useState, useEffect } from 'react';

const TimeCount = ( {onTime, newRound} ) => {

    const timelimit = 90;

    const [inputNum, setinputNum] = useState(0);
    const [showtime, setshowTime] = useState(0);

    const inputChange = (event) => {
        setinputNum(event.target.value);
    }

    const pushButton = () => {
        if( showtime > 0 ) {
            alert('is Running');
            return;
        }
        let t = Number(inputNum);
        if( t <= timelimit && t > 0 ) {            
            if( newRound() ) {
                setshowTime(t);
            } else {
                alert('nobody');
            }
        } else {
            alert('time error (time need < 90s & > 0)')
        }
    }

    const TimeCountDown = () => {        
        let ct = showtime - 1;
        setshowTime(ct);
        if( ct === 0 ) {
            onTime();
        }
    }

    useEffect( ()=> {        
        if( showtime > 0 ) {
            setTimeout(TimeCountDown, 1000);            
        } else {
            
        }
    }, [showtime] )
        
    return (
        
        <>
        <div className='TimeCountSet'>
            Time set:
            <input type="text" onChange={inputChange} size='1'></input>
            sec
            <button type="button" onClick={pushButton} >set</button>
        
        <br />
        <br />
        <br />
        
            TimeCount:            
            <ShowTime _time={showtime}></ShowTime>
        </div>
        
        </>
    )
}

export default TimeCount
