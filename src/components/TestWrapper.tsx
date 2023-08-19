import React from 'react'
import LandingController from './landing/Landing.controller'
import LandingView from './landing/Landing.view'

const TestWrapper = (props:any) => {
  return (
    <div><LandingController View={LandingView} /></div>
  )
}

export default TestWrapper