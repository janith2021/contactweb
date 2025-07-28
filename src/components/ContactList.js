import React from "react";
import logo from "../assets/person.png";
import icon from "../assets/delete.png";

const ContactCard = (props) => {

    const contactList = (props.navBarNameList).map((element,index) => {
        return (
            <div className="ui cards" style={{margin:15}} key={index}>
                <div className="card">
                    <div style={{textAlign:"end",padding:10}}>
                        <img src={icon} style={{height:50,width:50}} alt="Delete Icon" onClick={()=> props.removeContact(element.contactNumber)}/>
                    </div>
                    <img src={logo} style={{margin:10}} alt="Profile Icon"/>
                    <div className="content" style={{textAlign:"center"}}>
                        <div className="header">{element.name}</div>
                        <div className="description">{element.contactNumber}</div>
                    </div>
                </div>

            </div>
        );
    });
    return (
        contactList.length > 0 ?
        <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
         {contactList}
        </div>
        :
        <h1 style={{textAlign:"center",color:"green"}}>No contact records found</h1>
    );
}

export default ContactCard;