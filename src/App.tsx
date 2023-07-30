import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contacts from "./pages/Contacts";
import ChartsMaps from "./pages/ChartsMaps";
import CreateContact from "./pages/CreateContact";
import EditContact from "./pages/EditContact";

// The App component is the main component of the React application
// It sets up the routing for different pages and displays a header, sidebar, and content area for different routes.

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{width:"15%", border:"1px solid black",height:"89vh",backgroundColor:"#FFFFFF"}}>
            <Sidebar/>
          </div>
          <div style={{width:"85%", border:"1px solid #3C3CF6",height:"89vh", backgroundColor:"#ECE9E4"}}>
            <Routes>
              <Route path="/" element={<Contacts />} />
              <Route path="/chartsmaps" element={<ChartsMaps />} />
              <Route path="/createcontact" element={<CreateContact/>} />
              <Route path="/:id"  element={<EditContact/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
