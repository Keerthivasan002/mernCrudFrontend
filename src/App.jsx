import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create.jsx";
import Get from "./pages/Get.jsx";
import GetOne from "./pages/GetOne.jsx";
import Update from "./pages/Update.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/getAll" element={<Get />} />
          <Route path="/getOneUser" element={<GetOne />} />
          <Route path ="/updateOne" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
