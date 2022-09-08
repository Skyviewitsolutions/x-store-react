import React from 'react'
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
import './AddJournalGroup.css';

const AddJournalGroup = () => {
  return (
    <>
    <AccountNavbar showBelowMenu={true} title="Journal Group"/>
    <div className='AddJournalGroupCon'>
      <div className="JournaalGroupContent">
        <p>Journal Group</p>
        <input type="text" />
      </div>
      <div className="JournaalGroupContent">
        <p>Excluded Journals</p>
        <input type="text" />
      </div>
    </div>
    </>
  )
}

export default AddJournalGroup