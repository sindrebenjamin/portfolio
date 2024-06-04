import React, { useRef, useState, useEffect } from "react";

const Modal = ({ showModal, onClose }) => {
  const modalRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);

  useEffect(() => {
    if (showModal && modalRef.current) {
      const centerX = window.innerWidth / 2 - modalRef.current.offsetWidth / 2;
      const centerY =
        window.innerHeight / 2 - modalRef.current.offsetHeight / 2;
      setPosition({ x: centerX, y: centerY });
    }
  }, [showModal]);

  const onMouseDown = (e) => {
    if (e.target.className.includes("draggable-header")) {
      if (e.button !== 0) return;
      const pos = {
        x: e.pageX - modalRef.current.offsetLeft,
        y: e.pageY - modalRef.current.offsetTop,
      };
      setRel(pos);
      setDragging(true);
      e.stopPropagation();
      e.preventDefault();
    }
  };

  const onMouseUp = (e) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.pageX - rel.x,
      y: e.pageY - rel.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        showModal ? "" : "hidden"
      }`}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded shadow-lg w-1/3"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          position: "absolute",
        }}
        onMouseDown={onMouseDown}
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4 draggable-header cursor-move">
          <h2 className="text-lg font-bold">Draggable Modal</h2>
          <button className="text-red-500" onClick={onClose}>
            &times;
          </button>
        </div>
        <p>This is a draggable modal. Drag it from the header.</p>
      </div>
    </div>
  );
};

export default Modal;
