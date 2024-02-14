
import LeftMenu from './layout/leftMenu.js'
import LeftBottomMenu from './layout/leftBottomMenu.js'
import { Outlet } from "react-router-dom";

function Layout() {
   
    return (

     <div className="App">
      <div className="App-header">
        <div> this is my first react app</div> 
      </div>
     
      <div className='App-body'>
        <div className='App-left'>
            <LeftMenu></LeftMenu> 
            <LeftBottomMenu className="App-Bottom-Menu"></LeftBottomMenu>
        </div>
        <div className='App-content'>
          <Outlet></Outlet> 
        </div>
      </div>
      
      <div className='App-footer'>
        App footer goes here
      </div>

      
    </div>


    )



}

export default Layout;