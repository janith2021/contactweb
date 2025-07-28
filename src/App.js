import './components/AddContact'
import Header from './components/Header';
import AddContacts from './components/AddContact';
import ContatList from './components/ContactList';
import Spacer from './components/spacer'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import backgroundImage from './assets/background.jpg'

function App() {

  const[navBarNameList,setnavBarNameList] = useState( () =>
  {
    try {
   const saved = localStorage.getItem("contacts");
      
    return saved ? JSON.parse(saved):[]

  } catch (error) {
    return [];
  }
  });

  const addContact = (data) => {
    setnavBarNameList((prevList) => [
      ...prevList,
      data,
    ]); 
  }

  const removeContact = (contactNumber) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      if (result.isConfirmed) {
        setnavBarNameList((prevList)=>
          prevList.filter((contact)=> contact.contactNumber !== contactNumber)
        )    
        Swal.fire({
          title: "Deleted!",
          text: "Your record has been deleted.",
          icon: "success"
        });
      }
    });

  }

  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(navBarNameList))
  },[navBarNameList])

  return (
    <div style={{padding:50,backgroundImage:`url(${backgroundImage})`,backgroundSize:"cover",backgroundPosition:"center",minHeight:"100vh"}}>
      <Header/>
      <AddContacts addcontact={addContact} />
      <Spacer/>
      <ContatList navBarNameList={navBarNameList} removeContact={removeContact}/>
    </div>
  );
}

export default App;
