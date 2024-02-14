import {  Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../page.css";

const Jsx = () => {
  return (
    <>
             <h1>React - Jsx</h1>
             <nav >
                <ul className="page-nav">
                    <li className="page-nav-item"><Link to="JsxBasic">Jsx Basic | </Link></li>
                    <li className="page-nav-item"><Link to="">empty</Link></li>
                </ul>
             </nav>
            <Outlet></Outlet>
    </>
  )
};

export default Jsx;