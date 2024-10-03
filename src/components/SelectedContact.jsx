import { useState, useEffect } from "react";

const SelectedContact = ({selectedContactId, fetchContacts}) => {
    const [contact, setContact] = useState({})

    useEffect(()=>{
        async function fetchSingleContact(id){
            try {
              const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${id}`,{
                method: "GET"
              });
          
              const results = await response.json()
              setContact(results)
                            
            } catch (error) {
              console.error(error)
            }
          }

          fetchSingleContact(selectedContactId);
    },[])
    return (
      <>
        <div className="singleContactView">
            
            <h3>Viewing details for: {contact.name}</h3>
            <span>Name: {contact.name}</span><br/>
            <span>Phone Number: {contact.phone}</span><br/>
            <span>Email: {contact.email}</span><br/>
            <span>Username: {contact.username}</span><br/>
            <span>Website: {contact.website}</span><br/>
            <span>Company Name: {contact.company?.name}</span><br/>
        </div>
      </>
     );
}
 
export default SelectedContact;