import React from "react";
import Button from "../Button/Butoon";

function Header({ setToggle}) {

function onClick(){
    //setToggle(!toggle);
    setToggle( (toggle) => !toggle)
}
  return (
    <header className="header">
     <div className="toolbar__toggle-button">
          <Button onClick={onClick} />
        </div>
        <nav className="toolbar__navigation">
       
       <div className="toolbar_navigation-items">
         <ul>
           <li>
             <a href="/">Products</a>
           </li>
           <li>
             <a href="/">Users</a>
           </li>
         </ul>
       </div>
     </nav>
    </header>
  );
}
export default Header;
