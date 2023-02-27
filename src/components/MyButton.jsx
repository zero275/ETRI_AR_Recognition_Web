import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MyButton = ({ title, onClickBtn, size, disable }) => {
  return (
    <StyledButtonType1
      size={size}
      whileTap={{ scale: 1.1 }}
      onClick={onClickBtn}
      className="btn-type1"
      disable={disable}
    >
      {title}
    </StyledButtonType1>
  );
};

const StyledButtonType1 = styled(motion.button)`
  background-color: #9898a0;
  font-size: 1em;
  font-weight: 600;
  color: white;
  padding: ${({ size }) =>
    size === "s" ? "0.2em 0.5em" : size === "m" ? "0.7em 1em" : "0.7em 1em"};
  margin-right: 1em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  /* & : 자기자신을 가리킴 */
  &:hover {
    transition: all 300ms ease;
    background-color: #20bfa9;
  }
`;
