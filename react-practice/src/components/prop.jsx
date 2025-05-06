import React from "react";

function MyProps(props) {
  return (
    <>
      <h1>This is {props.name} !</h1>
      {props.children}
    </>
  );
}

export default MyProps;
