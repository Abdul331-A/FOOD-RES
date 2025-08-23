import React from "react";

export default function Model(props,children) {
//   console.log(props);

  return (
    <>
      <div className="backdrop" onClick={props.onClick}></div>
        <dialog className="modal" open>
          {props.children}
          
        </dialog>
      
    </>
  );
}
