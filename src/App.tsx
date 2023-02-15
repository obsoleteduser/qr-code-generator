import React, { ChangeEvent, ReactFragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QRCode from 'react-qr-code'

function App() {

  const [value, setValue] = useState('')
  const [current, setCurrent] = useState('')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(event.target.value)
  }

  const submitHandler = () =>{
    setCurrent(value)
  }

  return (
    <div className="App">
      <div className="QR">
      <h1>QR Code</h1>
      <input onChange={inputHandler} placeholder="Value" type="text" />
      <button onClick={submitHandler}>Get</button>
      <QRCode value={current}></QRCode>
      </div>
    </div>
  )
}

export default App
