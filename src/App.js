import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './App.css'

function App() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    return (
        <div className='wrapper centered'>
            <div className='flex-container'>
                <div className='box form'>
                    <input type='text'
                           placeholder='First Name'
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                    <input type='text'
                           placeholder='Last Name'
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className='box'>
                    <QRCode value={`${firstName} ${lastName}`}/>
                </div>
            </div>
        </div>
    )
}

export default App
