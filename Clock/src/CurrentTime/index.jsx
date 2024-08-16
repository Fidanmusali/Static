import React, { useEffect, useState } from 'react'

const CurrentTime = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
      const timerId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(timerId); 
    }, []);
  
    const formatTime = (date) => {
      return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    };
  return (
    <div>
    <h1>Current Time</h1>
    <p>{formatTime(time)}</p>
  </div>
  )
}

export default CurrentTime