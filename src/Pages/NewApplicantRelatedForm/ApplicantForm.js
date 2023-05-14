import React from 'react'
import SILTabs from '../../Components/SILTabs'
import PersonalDetails from './PersonalDetails'
import CommunicationalDetails from './CommunicationalDetails'

function ApplicantForm() {
  return (
    <SILTabs params={{"defaultKey":"Personal", "tabs":[
      {
        "eventKey":"Personal",
        "title":"Personal",
        "component":PersonalDetails
      },
      {
        "eventKey":"Communication",
        "title":"Communication",
        "component":CommunicationalDetails
      }
    ]}}/>
  )
}

export default ApplicantForm