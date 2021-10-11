import React, { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createPortal } from 'react-dom';

const ModalBackgroundStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const ModalStyled = styled.div`
  box-shadow: 0 0 1px rgba(67, 68, 69, 0.3), 0 1px 1px rgba(67, 68, 69, 0.3);
  background-color: var(--white);
  border-radius: 6px;
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

export const Modal = forwardRef(({ isOpen, onClose, children }, ref) => {
    if (!isOpen) return null;

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                onClose()
            }
        }
        document.addEventListener('keydown', close)
        return () => document.removeEventListener('keydown', close)
    },[])

    return createPortal(
        <>
            <ModalBackgroundStyled />
            <ModalStyled ref={ref}>
                {children}
            </ModalStyled>
        </>
        ,document.body);
});

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func,
}

Modal.defaultProps = {
    onClose() {},
}
