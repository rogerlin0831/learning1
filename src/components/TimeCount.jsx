import React from 'react'
import ShowTime from '../components/ShowTime'
import { useState, useEffect } from 'react';

const TimeCount = ( {_onTime, _newround} ) => {

    const timelimit = 90;

    const [inputNum, setinputNum] = useState(0);
    const [showtime, setshowTime] = useState(0);

    const inputChange = (event) => {
        setinputNum(event.target.value);
    }

    const pushButton = () => {
        let t = Number(inputNum);
        if( t <= timelimit && t > 0 ) {
            // startCountDown(t);
            setshowTime(t);
            _newround();
            setTimeout(TimeCountDown, 1000);
        } else {
            alert('time error (time need < 90s & > 0)')
        }
    }

    const TimeCountDown = () => {        
        var ct = showtime - 1;
        setshowTime(ct);
    }

    const startCountDown = ( _starttime ) => {
        setshowTime(_starttime);        
        setTimeout(TimeCountDown, 1000);
    }

    useEffect( ()=> {
        console.log('[useEffect] ',showtime)
        if( showtime > 0 ) {
            setTimeout(TimeCountDown, 1000);
        } else {            
            _onTime();
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
