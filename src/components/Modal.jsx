import { useLayoutEffect } from 'react';

function Modal({ children, closeModal }) {
  useLayoutEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
  }, [children, closeModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className='modal'>
      <div onClick={handleBackdropClick} className='modal__backdrop'>
          {children}
        </div>
    </div>
  );
}

export default Modal;