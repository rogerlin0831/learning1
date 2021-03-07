import React from 'react'
import { useState } from 'react';

function ShowTime( {_time} ) {
    const showTimeString = (time) => {
        var stime = Number(time);
        if (stime&&stime>0) {
            var min = Math.floor(stime / 60);
            var sec = stime % 60;
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
 