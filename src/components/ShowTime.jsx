import React from 'react'

function ShowTime( {_time} ) {
    const showTimeString = (time) => {
        let stime = Number(time);
        if (stime&&stime>0) {
            let min = Math.floor(stime / 60);
            let sec = stime % 60;
            if (min < 10) min = '0' + min;
            if (sec < 10) sec = '0' + sec;
            return min + ':' + sec;
        }
        return '00:00';
    }
    
    return (
        <h2 style={{color:_time<=0 ? 'red' : 'green'}}>{showTimeString(_time)}</h2>
    )
}

export default ShowTime
 