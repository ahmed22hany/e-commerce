import React from 'react'
import Homepage from '../src/screens/Homepage';
import Fullscreen from '../src/layout/Fullscreen';


const index = () => {
  return (
    <>
      <Fullscreen>
        <Homepage />
      </Fullscreen>
    </>
  )
}

export default index