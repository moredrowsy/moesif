import React, { useEffect, useState } from 'react';
import './index.css';

function AnalogClock({ hourOffset = 0, tz }) {
  const [time, setTime] = useState(
    tz
      ? new Date(new Date().toLocaleString('en-US', { timeZone: tz }))
      : new Date()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(
        tz
          ? new Date(new Date().toLocaleString('en-US', { timeZone: tz }))
          : new Date()
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [tz]);

  // Adjust for hour offset if provided (ie day light saving)
  if (hourOffset > 0) {
    time.setHours(time.getHours() + hourOffset);
  }

  return (
    <div className='clock-parent'>
      <div className='clock'>
        <div
          className='hour_hand'
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
        />
        <div
          className='min_hand'
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className='sec_hand'
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        />
        <span className='twelve'>12</span>
        <span className='one'>1</span>
        <span className='two'>2</span>
        <span className='three'>3</span>
        <span className='four'>4</span>
        <span className='five'>5</span>
        <span className='six'>6</span>
        <span className='seven'>7</span>
        <span className='eight'>8</span>
        <span className='nine'>9</span>
        <span className='ten'>10</span>
        <span className='eleven'>11</span>
      </div>
    </div>
  );
}

export default AnalogClock;
