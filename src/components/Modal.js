import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ContextApi } from "./Context";

function ModalComp() {
  const { setModalOpen } = useContext(ContextApi);
  const navigate = useNavigate();

  const handleIsOpen = (e) => {
    if (
      e.target.matches(".modal-container") ||
      e.target.matches(".close-modal")
    ) {
      setModalOpen(false);
    }
  };

  const handleTextClick = (data) => {
    setModalOpen(false);
    navigate(`${data}`);
  };

  return (
    <ModalContainer onClick={handleIsOpen} className="modal-container">
      <Modal>
        <ModalPara>
          <span onClick={handleIsOpen} className="close-modal">
            X
          </span>
        </ModalPara>
        <ModalPara onClick={() => handleTextClick("/create")}>
          Blog Post
        </ModalPara>
        <ModalPara onClick={() => handleTextClick("/music")}>Music</ModalPara>
        <ModalPara onClick={() => handleTextClick("/short")}>Short</ModalPara>
        <ModalPara onClick={() => handleTextClick("/meme")}>Meme</ModalPara>
        <ModalPara onClick={() => handleTextClick("/fact")}>Fact</ModalPara>
      </Modal>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(16, 14, 20, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  // &.open {
  //   display: flex;
  // }
`;
const Modal = styled.div`
  min-height: 300px;
  width: 300px;
  box-shadow: 0px 3px 6px var(--primary-color), 0px 6px 15px var(--shadow);
  background-color: var(--main-background);
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;
`;
const ModalPara = styled.p`
  padding: 1rem;
  cursor: pointer;
  // border-bottom: 1px solid var(--primary-color);
  color: var(--primary-color);
  font-size: 0.9rem; 

  &:hover {
    background-color: var(--primary-color);
    color: var(--reverseTextColor);
  }

  &:first-child {
    display: flex;
    justify-content: space-between;
    padding: 0;b
    background: red;

    span {
      padding: 0.7rem;
      cursor: pointer;
      margin-left: auto;
      font-weight: bold;
      font-size: 1.5rem;
      border: none !important;
      width: 50px;
      text-align: center;
      display: inline-block;
    }

    span:hover {
      background-color: var(--primary-color);
      color: var(--reverseTextColor);
    }
  }

  &:first-child:hover {
    background-color: initial;
    color: var(--primary-color);
  }
`;

export default ModalComp;
