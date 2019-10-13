import React, {useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({children, toggleModal}) => {

  const elementRef = useRef(null);

  if (!elementRef.current) {
    const div = document.createElement('div');
    elementRef.current = div;
  }

  useEffect(() => {
    modalRoot.appendChild(elementRef.current)
  
    // clean up function: remove modal element to avoid memory leak
    return () => modalRoot.removeChild(elementRef.current);
  }, [])


  return createPortal(
    <div>
      <span 
        title="Close Modal" 
        id="close"
        onClick={toggleModal}
      >
        &times;
      </span>
      {children}
    </div>,
    elementRef.current
  )
};

export default Modal;
