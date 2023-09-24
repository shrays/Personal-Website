import React, { useState, useEffect } from 'react'
import { lightbulb } from '../../portfolio'
import StatusIndicator from '../StatusIndicator/StatusIndicator'
import './Lightbulb.css'
import { HsvColorPicker } from 'react-colorful'

const Lightbulb = () => {
  if (!lightbulb.enabled) return null

  const [status, setStatus] = useState('Awaiting Query')
  const [power, setPower] = useState('[ ]')
  const [isOn, setIsOn] = useState(false)
  const [color, setColor] = useState({ h: 0, s: 0, v: 100 })

  async function statusCheck() {
    const response = await fetch('/.netlify/functions/status').then(
      (response) => response.json()
    )
    // console.log(JSON.stringify(response))

    if (response[0].connected == true) {
      setStatus('Online')
      const power = response[0].power
      setPower(power.charAt(0).toUpperCase() + power.slice(1))
      setIsOn(power === 'on')
      setColor({
        h: response[0].color.hue,
        s: response[0].color.saturation * 100,
        v: response[0].brightness * 100,
      })
    } else {
      setStatus('Offline')
      setPower('Off')
    }
  }

  useEffect(() => {
    statusCheck()
  }, [])

  const handleToggleClick = (value) => {
    setIsOn(value)
  }

  const handleSubmitClick = async () => {
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

    const resultStatus = response.results[0].status
    if (resultStatus === 'ok') {
      setStatus('Online')
      setPower(payload.power.charAt(0).toUpperCase() + payload.power.slice(1))
    } else {
      setStatus('Offline')
      setPower('Off')
    }
  }

  return (
    <section className="section lightbulb" id="lightbulb">
      <h2 className="section__title">Control my Lamp</h2>
      <div className="lightbulb__block">
        <div className="lightbulb__block-stack">
          <div className="colorful">
            <div className="custom-layout">
              <HsvColorPicker color={color} onChange={setColor} />
              <div className="custom-text">
                Brightness: {`${color.v.toFixed(0)}%`}
              </div>
            </div>
          </div>

          <div className="lightbulb__block-button-stack">
            <button className="controlButton refresh" onClick={statusCheck}>
              Refresh
            </button>
            <button
              className={`controlButton onButton ${isOn ? 'active' : ''}`}
              onClick={() => handleToggleClick(true)}
            >
              On
            </button>
            <button
              className={`controlButton offButton ${!isOn ? 'active' : ''}`}
              onClick={() => handleToggleClick(false)}
            >
              Off
            </button>
            <button
              className="controlButton submit"
              onClick={handleSubmitClick}
            >
              Submit
            </button>

            <div className="status-container">
              <StatusIndicator status={status === 'Online'} />
              <span
                className={status === 'Awaiting' ? 'status-text' : ''}
                style={{
                  color:
                    status === 'Online'
                      ? 'green'
                      : status === 'Offline'
                      ? 'red'
                      : undefined,
                }}
              >
                {status}
              </span>
              <span>
                &nbsp; - &nbsp;
                {power}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lightbulb
