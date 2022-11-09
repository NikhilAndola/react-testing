import React, { useState, useRef, useEffect } from 'react';

const Timer = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(50);
  const [ss, setSs] = useState(true);

  const timeRef = useRef();

  function startTime() {
    timeRef.current = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 100);
  }

  const Start = () => {
    setSs(!ss);
  };

  useEffect(() => {
    if (!ss) {
      startTime();
    } else {
      clearInterval(timeRef.current);
    }
  }, [ss]);

  useEffect(() => {
    if (sec === 0 && min === 0) {
      clearInterval(timeRef.current);
      setSs(true);
    }
  }, [sec, min]);

  const Reset = () => {
    setMin(0);
    setSec(50);
  };

  return (
    <div>
      <h2>timer</h2>
      <div>{min + ':' + sec}</div>
      <button onClick={Start}>{ss ? 'Start' : 'Stop'}</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Timer;
