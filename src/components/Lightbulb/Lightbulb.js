import React, { useState, useEffect } from 'react'
import { lightbulb } from '../../portfolio'
import StatusIndicator from '../StatusIndicator/StatusIndicator'
import './Lightbulb.css'
import { HsvColorPicker } from 'react-colorful'

// Utility function to convert HSV to RGB
const hsvToRgb = (h, s, v) => {
  s /= 100;
  v /= 100;
  let r = 0, g = 0, b = 0;
  const i = Math.floor(h / 60);
  const f = h / 60 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
    default: break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
};

const Lightbulb = () => {
  if (!lightbulb.enabled) return null

  const [status, setStatus] = useState('Awaiting Query') // is lightbulb available
  const [power, setPower] = useState('[ ]') // is lightbulb on or off
  const [isOn, setIsOn] = useState(false) // is on or off button selected
  const [color, setColor] = useState({ h: 0, s: 0, v: 100 }) // current color-picker value
  const [originalColor, setOriginalColor] = useState({ h: 0, s: 0, v: 100 }) // last-checked current lightbulb color
  const [loading, setLoading] = useState(false) // disables refresh/submit buttons
  const [changed, setChanged] = useState(false) // enable submit button on state change

  // request current lightbulb state
  async function statusCheck() {
    setLoading(true)
    const response = await fetch('/.netlify/functions/status').then(
      (response) => response.json()
    )
    // console.log(JSON.stringify(response))
    
    if (response[0] && response[0].connected === true) {
      setStatus('Online')
      const power = response[0].power
      setPower(power.charAt(0).toUpperCase() + power.slice(1))
      setIsOn(power === 'on')
      const newColor = {
        h: response[0].color.hue,
        s: response[0].color.saturation * 100,
        v: response[0].brightness * 100,
      }
      setColor(newColor)
      setOriginalColor(newColor)
    } else {
      setStatus('Offline')
      setPower('Off')
    }
    setLoading(false)
    setChanged(false)
  }

  // on page load
  useEffect(() => {
    statusCheck()
  }, [])
  
  // update color-picker
  const handleColorChange = (value) => {
    setColor(value)
  }

  //update on off buttons
  const handleToggleClick = (value) => {
    setIsOn(value)
  }

  //enable submit if lightbulb power/color settings changed
  useEffect(() => {
    const powerState = power === "On"
    const hasChanged = !(color === originalColor && powerState === isOn)
    setChanged(hasChanged)
  }, [color, isOn]);

  // set lightbulb state
  const handleSubmitClick = async () => {
    setLoading(true)
    setChanged(false)
    const payload = {
      duration: 0,
      fast: false,
      power: isOn ? 'on' : 'off',
      color: `hue:${color.h} saturation:${color.s / 100} brightness:${
        color.v / 100
      }`,
    }

    const response = await fetch('/.netlify/functions/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json())

    // console.log(JSON.stringify(response))
    
    if (response.results && response.results[0].status === 'ok') {
      setStatus('Online')
      setPower(payload.power.charAt(0).toUpperCase() + payload.power.slice(1))
      setOriginalColor(color)
    } else {
      setStatus('Offline')
      setPower('Off')
    }
    setLoading(false)
  }

  const { r, g, b } = hsvToRgb(originalColor.h, originalColor.s, originalColor.v)

  return (
    <section className="section lightbulb" id="lightbulb">
      <h2 className="section__title">Control my Lamp</h2>
      <div className="lightbulb__block">
        <div className="lightbulb__block-stack">
          <div className="colorful">
            <div className="custom-layout">
              <HsvColorPicker className="colorpicker" color={color} onChange={handleColorChange} />
              <div className="brightness-text">
                Brightness: <b>{`${color.v.toFixed(0)}%`}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="lightbulb__block-stack">
          <div>
            <span className="stack-desc">Don't wake me up.<br/>Or do. Your choice!<br/></span> 
          </div>
          <button
            className={`controlButton refresh ${loading ? 'loading' : ''}`}
            onClick={statusCheck}
            disabled={loading}
          > Refresh</button>
          <div className="mid-buttons">
            <button
              className={`controlButton onButton ${isOn ? 'active' : ''}`}
              onClick={() => handleToggleClick(true)}
              disabled={isOn}
            > On</button>
            <button
              className={`controlButton offButton ${!isOn ? 'active' : ''}`}
              onClick={() => handleToggleClick(false)}
              disabled={!isOn}
            > Off</button>
          </div>
          <button
            className={`controlButton submit ${(loading || status === 'Offline' || !changed) ? 'loading' : ''}`}
            onClick={handleSubmitClick}
            disabled={loading || status === 'Offline' || !changed}
          > Submit</button>

          <div className="status-container">
            <StatusIndicator status={status === 'Online'} />
            <span
              className={status === 'Awaiting' ? 'status-text' : ''}
              style={{
                color:
                  status === 'Online'
                    ? '#60c86e'
                    : status === 'Offline'
                    ? '#ff5d5d'
                    : undefined,
              }}
            >{status}</span>
            <span>&nbsp; - &nbsp;{power}</span>
            <div
              className="status-color"
              style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}
              onClick={() => handleColorChange(originalColor)}
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lightbulb
