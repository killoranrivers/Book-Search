import React, { Component } from "react";
import Search from "./pages/search.js";
// import Saved from "./pages/saved.js";
import Nav from "./components/Nav";

function App () {
  return(
    <div>
      <Nav />
      <Search />
    </div>
  );
}

export default App;
