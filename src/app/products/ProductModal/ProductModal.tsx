import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import FocusLock from 'react-focus-lock';

import {
  Backdrop,
  ModalWrapper,
  CloseButton,
  ImageWrapper,
  InfoWrapper,
  StyledCloseIcon,
} from './ProductModal.styles';

import { ProductModalProps } from './ProductModal.types';

let modalRoot = document.getElementById('modal-root') as HTMLElement;
if (!modalRoot) {
  modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
}

export const ProductModal = ({
  handleClose,
  product,
  isOpen,
}: ProductModalProps) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    const current = el.current;
    document.addEventListener('keydown', handleKeyDown, false);
    document.body.style.overflow = 'hidden';
    modalRoot.appendChild(current);

    return () => {
      modalRoot.removeChild(current);
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown, false);
    };
  }, [isOpen, handleClose]);

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose} data-testid="backdrop">
      <FocusLock>
        <ModalWrapper
          tabIndex={-1}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-header"
          onClick={(e) => e.stopPropagation()}
        >
          <CloseButton aria-label="Close" onClick={handleClose}>
            <StyledCloseIcon />
          </CloseButton>

          <ImageWrapper>
            <img src={product.image} alt={product.name} />
          </ImageWrapper>

          <InfoWrapper>
            <h2 id="modal-header">{product.name}</h2>
            <p>{product.description}</p>
          </InfoWrapper>
        </ModalWrapper>
      </FocusLock>
    </Backdrop>,
    el.current
  );
};
