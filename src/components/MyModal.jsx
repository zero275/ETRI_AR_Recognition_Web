import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MyButton } from "./MyButton";
import styled from "styled-components";

// modal-dropdown 용도로 쓰려고 만듬
export const MyModal = () => {
  return (
    <ModalContainer>
      <ModalView>
        <header>
          <h2>해더이름</h2>
          <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.2 }}>
            <FontAwesomeIcon size="2x" icon={faXmark} color="#9898a0" />
          </motion.button>
        </header>
        <main>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </main>
        <footer>
          <MyButton
            title="확인"
            onClickBtn={() => {
              console.log("123");
            }}
          />
          <MyButton
            title="취소"
            onClickBtn={() => {
              console.log("123");
            }}
          />
        </footer>
      </ModalView>
    </ModalContainer>
  );
};

// footer 가 없는 modal
export const MyModalNoFooter = ({ title, children, onCancel }) => {
  return (
    <ModalContainer>
      <ModalView
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
      >
        <header>
          <h2>{title}</h2>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            onClick={onCancel}
          >
            <FontAwesomeIcon size="2x" icon={faXmark} color="#9898a0" />
          </motion.button>
        </header>
        <main>{children}</main>
      </ModalView>
    </ModalContainer>
  );
};
// 동영상 전용 모달창

export const Mp4Modal = ({ title, children, setFileListModalHandle }) => {
  return <ModalContainer id="modal"></ModalContainer>;
};

// 취소 콜백을 따로 연결 안해도 닫을 수 있는 간단한 modal
export const MyModalInfo = ({ title, children, setFileListModalHandle }) => {
  return (
    <ModalContainer id="modal">
      <ModalView
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
      >
        <header>
          <h2>{title}</h2>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              const modelElement = document.getElementById("modal");
              if (modelElement) {
                modelElement.classList.add("display-none");
              }
              setFileListModalHandle(false);
            }}
          >
            <FontAwesomeIcon size="2x" icon={faXmark} color="#9898a0" />
          </motion.button>
        </header>
        <main>{children}</main>
      </ModalView>
    </ModalContainer>
  );
};

const ModalContainer = styled(motion.ul)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.802);
  z-index: 1000;
`;

const ModalView = styled(motion.div).attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #232228;
  width: fit-content;
  height: fit-content;
  border-radius: 24px;
  padding: 1em;
  position: relative;
  > .close-btn {
    position: absolute;
    top: 2px;
    right: 7px;
    cursor: pointer;
  }
  > header {
    position: relative;
    padding: 1em;
    width: 100%;
  }
  > header h2 {
    font-size: 1.3em;
  }
  > header span {
    cursor: pointer;
    margin-right: 1em;
  }
  > header button {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 1em;
    width: fit-content;
    cursor: pointer;
    background: none;
    border: none;
  }
  > main {
    height: fit-content;
    padding: 1em;
    margin: 1em;
    min-width: 20em;
  }
  > footer {
    text-align: right;
    padding: 1em;
    width: 100%;
  }
  > footer button {
  }
`;
