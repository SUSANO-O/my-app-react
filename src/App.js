/* eslint-disable react/jsx-no-undef */
import React,{ useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Article from "./componentes/Article/Article";
import Footer from "./componentes/Footer/Footer";
import Nav from "./componentes/Nav/Nav";

function App() {
  const [ toggle, setToggle ] = useState(false);

  return (
    <React.Fragment>
      <div className="middle">
         {toggle && <Nav /> } 
        <Article>
          {" "}
          <Header setToggle={setToggle}   />{" "}
        </Article>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default App;
