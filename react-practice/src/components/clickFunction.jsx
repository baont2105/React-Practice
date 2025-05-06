import React from "react";

function ClickFunction() {
  function clickHandler() {
    console.log("Clicked !");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default ClickFunction;
