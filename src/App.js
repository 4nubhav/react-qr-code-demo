import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.css'

function App() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [showQR, setShowQR] = useState(false)

    const generate = (e) => {
        e.preventDefault()
        setShowQR(true)
    }

    return (
        <div className='wrapper centered'>
            <div className='flex-container'>
                <div className='box form'>
                    <input type='text'
                           placeholder='First Name'
                           value={firstName}
                           onChange={(e) => {
                               setShowQR(false)
                               setFirstName(e.target.value)
                           }}/>
                    <input type='text'
                           placeholder='Last Name'
                           value={lastName}
                           onChange={(e) => {
                               setShowQR(false)
                               setLastName(e.target.value)
                           }}/>
                    <button onClick={generate}>Generate</button>
                </div>
                <div className='box'>
                    { showQR ? <QRCode value={`${firstName} ${lastName}`}/> : <h1>QR</h1>}
                </div>
            </div>
        </div>
    )
}

export default App
