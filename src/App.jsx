import { useState, useEffect } from 'react'
import ContactList from './components/ContactList'
import './App.css'
import SelectedContact from './components/SelectedContact'

function App() {

  const [selectedContactId, setSelectedContactId] = useState("")
  return (
    <>
      {
        selectedContactId ? (
          <div>
             <SelectedContact selectedContactId={selectedContactId}/>
          </div>
        )
        : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )
      }
    </>
  )
}

export default App
