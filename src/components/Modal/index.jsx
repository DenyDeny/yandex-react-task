import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalBackgroundStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ModalStyled = styled.div`
  background-color: var(--white);
  border: 1px solid #ccc;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 51.5rem;
  z-index: 2;
  @media(max-width: 50rem) {
    max-width: 90%;
  }
`;

export const Modal = forwardRef(({ isOpen, children }, ref) => {
    if (!isOpen) return null;
    return createPortal(
        <>
            <ModalBackgroundStyled />
            <ModalStyled ref={ref}>
                {children}
            </ModalStyled>
        </>
        ,document.body);
});
