import * as React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { ReactComponent as CloseIcon } from "../../static/img/one.svg";

const IconWrapper = styled.div`
  float: right;
  margin-bottom: 1rem;
  cursor: pointer;
  svg {
    width: .8rem;
  }
`;


const ModalOuter = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(230, 230, 230, 0.8);
    z-index: 1000;
`

const ModalInner = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 1000;
    padding: 1rem;
    overflow-x: hidden;
    @media (min-width: 835px) {
      width: ${(props) => props.width};
      height: ${(props) => props.height};
          border-radius: 12px;
          border: 2px solid #333;
  }
`

const Modal = (props) => {
    if (!props.open) return null

    return (
    <>
        <ModalOuter onClick={props.close}>
            <ModalInner
            width={props.width}
            height={props.height}
            >
            {props.children}
            <div style={{cursor:"pointer"}} onClick={props.close}>close video</div>
            </ModalInner>
        </ModalOuter>
    </>
     );
}

export default Modal;
