import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Homepage/home.js';
import Education from './Pages/Education/Education.js';
import ApiTest from './Pages/Testing/ApiTest.js';
import EssenceCalc from './Pages/DND/essenceCalc.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={<Home />}></Route>
        <Route path="Education" element={<Education/>}></Route>
        <Route path="ApiTest" element={<ApiTest/>}></Route>
        <Route path="EssenceCalc" element={<EssenceCalc/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <Home/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
