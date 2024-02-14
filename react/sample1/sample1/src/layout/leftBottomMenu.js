
import React from "react";
import {  Link } from "react-router-dom";
import "./leftBottomMenu.css"


function LeftBottomMenu (props) {


  function displayContent(item, e) {

    alert(item.name);
   // alert(e.type);
   // alert(e.target);

  }

  const menuList = [
  { id: 0, name: 'Ford', desc: "Ford-Engagement for 2012-2013" ,link: "Home"},
  { id: 1, name: 'Toyota', desc: "Toyota-Engagement for 2012-2013", link: "DataKitchen" },
  { id: 2, name: 'Finlays', desc: "Finlays-Engagement for 2012-2013",link: "Engagement" },
];

return (
<>

    <ul className="left-bottom-menu">

      {menuList.map((item) => (
        <li className="left-bottom-menu-item" key={item.id} onClick={(event)=>displayContent(item, event)}>
          <h4>{item.name}</h4>
          <p>{item.desc}</p>
        </li>
      ))}

    </ul>


</>
)

}

export default LeftBottomMenu;