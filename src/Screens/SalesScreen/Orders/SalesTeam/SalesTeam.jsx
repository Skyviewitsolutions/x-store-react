import React from 'react'
import SalesTeamComp from '../../../../components/SalesTeamComp/SalesTeamComp'
import SalesNavbar from '../../SalesNavbar/SalesNavbar'
import './SalesTeam.css'

const SalesTeam = () => {

    const handleCreatePage = () => {

    }
  return (
    <div>
        <SalesNavbar showBelowMenu={true} handleCreatePage={handleCreatePage} title="Sales Teams"/>
        <div className="SalesGraphMain">
        <SalesTeamComp/>
        <SalesTeamComp/>
        <SalesTeamComp/>
        <SalesTeamComp/>
        <SalesTeamComp/>
        <SalesTeamComp/>
        </div>
    </div>
  )
}

export default SalesTeam