import React from "react";

export default function Model(props) {
//   console.log(props);

  return (
    <>
      <div className="backdrop" onClick={props.onClick}>
        <dialog className="modal" open>
          <h1></h1>
        </dialog>
      </div>
    </>
  );
}
