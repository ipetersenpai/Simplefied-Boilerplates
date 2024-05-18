import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './../pages/landing/landingpage'

const Unprotected = () => {
  return (
    <Routes>
      <Route path="/" element={ <Landingpage />} />
    </Routes>
  )
}

export default Unprotected
