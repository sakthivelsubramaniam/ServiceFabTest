import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout  from './Layout.js';
import DataKitchen  from './page/dataKitchen.js';
import Home from './page/home.js';
import Weather from './page/weather.js';
import Engagement from './page/engagement.js';
import BasicComp  from './page/BasicComp/basicComp.js';
import InputComp from './page/BasicComp/InputComp.js';
import FormComp from './page/BasicComp/formComp.js';
import FormComp2 from './page/BasicComp/formComp2.js';
import ReactFeature  from './page/ReactFeature/ReactFeature.js';
import Jsx  from './page/reactJsx/reactJsx.js';
import JsxBasic from './page/reactJsx/JsxBasic.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}  >
          <Route path="/Home" element={<Home />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/DataKitchen" element={<DataKitchen />} />
          <Route path="/BasicComp" element={<BasicComp />} >
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="InputComp" element={<InputComp />} />
            <Route path="FormComp" element={<FormComp />} />
            <Route path="FormComp2" element={<FormComp2 />} />
          </Route>
          <Route path="/ReactFeature" element={<ReactFeature />} />
          <Route path="/Jsx" element={<Jsx />} >
              <Route path="JsxBasic" element={ <JsxBasic/> }></Route>
          </Route>

      </Route>
      </Routes>
      
  );
}
export default App;

