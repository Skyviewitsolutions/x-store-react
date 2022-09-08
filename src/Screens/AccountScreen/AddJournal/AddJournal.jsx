import React,{useState} from 'react'
import './AddJournal.css';
import Nav from "react-bootstrap/Nav";
import AdvanceSetting from './AdvanceSetting/AdvanceSetting';
import JournalEntires from './JournalEntires/JournalEntires';
import AccountNavbar from '../../../components/AccountNavbar/AccountNavbar';
const AddJournal = () => {

  const [events, setEvents] = useState("JournalEntires");
  return (
    <>
     <AccountNavbar showBelowMenu={true} title = "Journal"/>
    <div className="JournalMainCon">
        <div className="JournalContainer">
            <p>Journal Name</p>
            <input type="text" />
            <div className="Journalinput">
            <p>Type</p>
            <select>
                <option>Sales</option>
                <option>Purchase</option>
                <option>Case</option>
                <option>Bank</option>
                <option>Miscellaneous</option>
            </select>
            </div>
            <div className="detailsbtn">
          <Nav variant="tabs" defaultActiveKey="/home" >
            <Nav.Item
              className="detailslink"
              onClick={ ()=> setEvents("JournalEntires")}>
              <Nav.Link href="">Journal Entires</Nav.Link>
            </Nav.Item>
            <Nav.Item
              className="detailslink"
              onClick={ ()=> setEvents("AdvanceSetting")}>
              <Nav.Link eventKey="link-1">Advance Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        <div className="AdvanceSettingNAv">
        {events === "JournalEntires" &&(
            <JournalEntires/>
          )}
          {events === "AdvanceSetting" && <AdvanceSetting/>}
        </div>
        </div>
    </div>
    </>
  )
}

export default AddJournal