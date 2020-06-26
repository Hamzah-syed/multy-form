import React from "react";

const ErrorMsg = (props) => {
  return (
    <div className="bg-red-600 bg-opacity-25 py-2 px-3  text-red-600  text-white rounded-b-md">
      <h1>{props.children}</h1>
    </div>
  );
};

export default ErrorMsg;
