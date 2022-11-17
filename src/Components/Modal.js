import React from "react";

import "./Assets/modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="text-2xl atmosphere "
          >
            X
          </button>
        </div>
        <div className="title">
          <h1 className="atmosphere text-4xl text-slate-600">Hint</h1>
        </div>
        <div className="text-2xl text-justify mt-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, qui dicta. Accusantium, officia placeat laborum quae debitis esse quaerat odit iusto expedita voluptatem saepe accusamus incidunt, voluptate eius sint hic!</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
