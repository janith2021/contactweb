import React,{useState} from "react";
import Swal from 'sweetalert2'
import validatePhoneNumber from "../validator/mobileNumberValidator";

const AddContact = (props) => {
    const [name,setName] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    var temporaryPhonenumber;
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name.trim() || !contactNumber.trim()){
            Swal.fire({
                title: 'Error!',
                text: 'Name or contact number cannot be empty',
                icon: 'error',
                confirmButtonText: 'Ok'
                })
            return;    
        }
        if(contactNumber.length < 10){
            Swal.fire({
                title: 'Error!',
                text: 'contact number must contain 10 digits',
                icon: 'error',
                confirmButtonText: 'Ok'
                })
            return;
        }

        if(contactNumber.startsWith('0')){
            temporaryPhonenumber = contactNumber.replace(/^0/,'94')
        }
        
        const resData = await validatePhoneNumber(temporaryPhonenumber);

        if(resData != null && resData.valid){
            console.log(resData.carrier)
            props.addcontact({name:name,contactNumber:contactNumber,provider:resData.carrier,type:resData.type,location:resData.location});
            setName("")
            setContactNumber("")
            Swal.fire({
                    title: 'Success!',
                    text: 'Contact Number added successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                    })
        }else {
            Swal.fire({
                    title: 'Error!',
                    text: 'Invalid Mobile Number',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                    })
        }
    }
    return (
        <div style={{marginTop:"20px",backgroundColor:"white",padding:"40px",borderRadius:"20px"}}>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label style={{fontSize:"1.25rem",color:"#4379F2",fontWeight:"bold"}}>Name</label>
                    <input type="text" name="firstName" placeholder="First Name" value={name} onChange={(e)=> setName(e.target.value)} style={{fontSize:"1.25rem",color:"#4300FF",fontWeight:"bold",borderColor:"#1C1678",borderWidth:"5px"}}
                    />
                </div>
                <div className="field">
                    <label style={{fontSize:"1.25rem",color:"#4379F2",fontWeight:"bold"}}>Contact Number</label>
                    <input type="tel" name="contactNumber" placeholder="Contact Number" value={contactNumber} onChange={(e)=> setContactNumber(e.target.value)} style={{fontSize:"1.25rem",color:"#4300FF",fontWeight:"bold",borderColor:"#1C1678",borderWidth:"5px"}}/>
                </div>
                <div style={{textAlign:"center"}}>
                    <button className="ui primary button" type="submit" style={{alignSelf:"center",backgroundColor:"green",width:"100%",fontSize:"1.25rem",fontWeight:"bold"} }>Add Contact Number</button>
                </div>
            </form>
        </div>
    );
};

export default AddContact;