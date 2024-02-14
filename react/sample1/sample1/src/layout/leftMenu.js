import React from "react";
import {  Link } from "react-router-dom";
import './leftMenu.css';

function LeftMenu() {
  
 // const [posts, setPosts] = React.useState([]);
  
 return (
    <>
    <nav>
      <ul className="left-menu" >
          <li> <Link to="/Jsx">Jsx </Link> </li>
          <li> <Link to="/BasicComp">React BasicComp</Link> </li>
          <li> <Link to="/ReactFeature">React Feature</Link> </li>
          <li> <Link to="/Home">Home</Link> </li>
          <li> <Link to="/Weather">Weather</Link> </li>
          <li> <Link to="/Engagement">Engagement</Link> </li>
          <li> <Link to="/DataKitchen">DataKitchen</Link> </li>
      </ul>
  
      </nav> 
    </>
  );
}

export default LeftMenu;