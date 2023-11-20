import React, { useState, useEffect } from 'react';

const FlashSaleTime = () => {
  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
  });

  useEffect(() => {
    // Update the current time every second
    const intervalID = setInterval(() => {
      setCurrentTime({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <p className='text-[--white-color]'>
        <span className='bg-[--primary-color] p-2'>{currentTime.hours.toString().padStart(2, '0')}</span>&nbsp;:&nbsp;
        <span className='bg-[--primary-color] p-2'>{currentTime.minutes.toString().padStart(2, '0')}</span>&nbsp;:&nbsp;
        <span className='bg-[--primary-color] p-2'>{currentTime.seconds.toString().padStart(2, '0')}</span>
      </p>
    </div>
  );
};

export default FlashSaleTime;
