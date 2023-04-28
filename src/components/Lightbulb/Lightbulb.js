import React, { useState } from 'react';
import { lightbulb } from '../../portfolio';
import './Lightbulb.css';

const Lightbulb = () => {
  if (!lightbulb.enabled) return null;

  const [status, setStatus] = useState('Awaiting Query');
  const [power, setPower] = useState('[ ]');

  const handleClick = async () => {
    const response = await fetch('/.netlify/functions/toggle').then(response => response.json())
    console.log(JSON.stringify(response))

    const resultStatus = response.results[0].status;
    if (resultStatus === 'ok') {
      setStatus('Online')
      const power = response.results[0].power;
      setPower(power.charAt(0).toUpperCase() + power.slice(1));
    } else {
      setStatus('Offline');
      setPower('Off')
    }
  };

  return (
    <section className="section lightbulb" id="lightbulb">
      <h2 className="section__title">Control my Lamp</h2>
      <ul className="lightbulb__list">
        <li className="lightbulb__list-item btn btn--plain" onClick={handleClick}>
          Toggle Lamp
        </li>
      </ul>
      <div className="status-container">
        <p>
          <span
            className={status === 'Awaiting' ? 'status-text' : ''}
            style={{ color: status === 'Online' ? 'green' : status === 'Offline' ? 'red' : undefined, }}
          >
            {status}
          </span>
          &nbsp;
           - 
          &nbsp;
          {power}
        </p>
      </div>
    </section>
  );
};

export default Lightbulb;