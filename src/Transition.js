import React from 'react';
import './style.css';

export default function Transition() {
  const handlePaster = (e) => {
    console.log('value', e.clipboardData);
  };
  const [val, setVal] = React.useState('');
  const [comp, setComp] = React.useState(false);

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const expand = () => {
    setComp(!comp);
  };

  return (
    <div>
      handle paste: <input value={val} onChange={handleChange} type="number" />
      <button onClick={expand} style={{ display: 'block' }}>
        Expand/shrink below div
      </button>
      {
        <>
          <div className={`root ${comp && 'change'}`}>
            <h3>Hello</h3>
          </div>
        </>
      }
    </div>
  );
}
