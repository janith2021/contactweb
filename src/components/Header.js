import React from "react";

const Header = (props) =>{
    // const navBarItemList = props.navBarNameList.map((navbarItem)=>{
    //     return <h1>{navbarItem}</h1>
    // });
    // return (
    //     <div style={{textAlign:"center",textDecorationStyle:"dashed",boxShadow:"unset",backgroundColor:"red"}}>
    //         <h1 style={{color:"white"}}>Contact Center</h1>
    //         {navBarItemList}
    //     </div>
    // );
    return (
        <div style={{textAlign:"center",color:"#640D5F"}}>
            <h1>My Contact List</h1>
        </div>
    );
}

export default Header;