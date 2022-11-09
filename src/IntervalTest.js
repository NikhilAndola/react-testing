import React from 'react';

export default function IntervalTest() {
  const [num, setNum] = React.useState(0);
  let intervalRef = React.useRef(null);
  console.log(num);

  React.useEffect(() => {
    if (num === 5) {
      clearInterval(intervalRef.current);
    }
  }, [num]);

  const handleInterval = () => {
    if (num === 5) return;
    intervalRef.current = setInterval(() => {
      setNum((prev) => prev + 1);
    }, 1000);
    console.log('intervalref value', intervalRef.current);
  };
  const handleClear = () => {
    console.log('clear');
    clearInterval(intervalRef.current);
  };
  return (
    <>
      <div className="animation">
        <button onClick={handleInterval}>Run interval</button>
        <button onClick={handleClear}>Clear Interval</button>
      </div>
      <div>Num: {num}</div>
    </>
  );
}
