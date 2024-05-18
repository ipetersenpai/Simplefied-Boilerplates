import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Unprotected from './routes/unprotected'
import Protected from './routes/protected'

function App() {


  return (
    <>
        <BrowserRouter>
            {false ? <Protected/> : <Unprotected/>}
        </BrowserRouter>
    </>
  )
}

export default App
