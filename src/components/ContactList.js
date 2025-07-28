import React from "react";
import logo from "../assets/person.png";
import icon from "../assets/delete.png";

const ContactCard = (props) => {

    const contactList = (props.navBarNameList).map((element,index) => {
        console.log(element.carrier);
        return (
            <div className="ui cards" style={{margin:15}} key={index}>
                <div className="card">
                    <div style={{textAlign:"end",padding:10}}>
                        <img src={icon} style={{height:50,width:50}} alt="Delete Icon" onClick={()=> props.removeContact(element.contactNumber)}/>
                    </div>
                    <img src={logo} style={{margin:10}} alt="Profile Icon"/>
                    <div className="content" style={{textAlign:"center"}}>
                        <div className="header" style={{color:"#B9375D"}}>{element.name}</div>
                        <div className="description" style={{fontSize:"1.25rem",fontWeight:"bold",color:"#4379F2"}}>{element.contactNumber}</div>
                        <div className="description" style={{fontSize:"1.25rem",fontWeight:"bold",color:"#006BFF"}}>{element.provider}</div>
                        <div className="description" style={{fontSize:"1.25rem",fontWeight:"bold",color:"#6EC207"}}>{element.type}</div>
                        <div className="description" style={{fontSize:"1.25rem",fontWeight:"bold",color:"#FF6600"}}>{element.location}</div>
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