import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const time = Date.parse(targetDate) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
      total: time,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className='mt-4'>
      <h3 className='text-3xl font-bold'>
        {timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}
      </h3>
    </div>
  );
}

export default CountdownTimer
