import InputComp from "./InputComp";
import {  Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const BasicComp = () => {

const inputContainerCss = {
    //color: "white",
    //backgroundColor: "#321e50",
    backgroundColor: "#8f92a2",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };

const navCss = {
  display:"flex",
  flexDirection:"row",
  listStyleType:"none",
}

const navItemCss = {

  padding:"6px"

}
const headerCss= {
    //backgroundColor: "#321e50",
    //display:"grid"
};
return (
    <>
        <div style={headerCss}>
             <h1>Basic Input components1</h1>
             <nav >
                <ul style={navCss}>
                    <li style={navItemCss}><Link to="InputComp">Input Elements |</Link></li>
                    <li style={navItemCss}><Link to="FormComp"> form Component1 |</Link></li>
                    <li style={navItemCss}><Link to="FormComp2"> form Component2 |</Link></li>
                </ul>

             </nav>
        </div>
        
        <div style={inputContainerCss}>
            <Outlet></Outlet>
        </div>
    </>
)
}

export default BasicComp;