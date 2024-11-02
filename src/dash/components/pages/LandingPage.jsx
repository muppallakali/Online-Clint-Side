import React from 'react'
import TopBar from '../TopBar'
import ItemDisplay from "../ItemDisplay"
import Chains from "../Chains"
import FirmCollections from "../FirmCollections"
import ProductMenu from "../ProductMenu"

export default function LandingPage() {
  return (
    <>
    <TopBar></TopBar>
    <div className="landingSection">
    <ItemDisplay></ItemDisplay>
    <Chains></Chains>
    <FirmCollections></FirmCollections>    
    </div>
    
    </>
  )
}
