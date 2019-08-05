import React from "react";
import "../../App.css";


function Article({children}) {
  return (

      <div className="article"> 
      {children} articulo 
      </div>
  );
}
export default Article;
