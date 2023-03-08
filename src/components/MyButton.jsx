import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MyButton = ({
  title,
  onClickBtn,
  size,
  disable,
  filterRowData,
}) => {
  return (
    <StyledButtonType1
      size={size}
      whileTap={filterRowData?.length === 0 ? {} : { scale: 1.1 }}
      onClick={onClickBtn}
      className="btn-type1"
      disabled={filterRowData?.length === 0 ? true : false}
      filterRowData={filterRowData}
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
  cursor: ${({ filterRowData }) =>
    filterRowData?.length === 0 ? "" : "pointer"};
  /* & : 자기자신을 가리킴 */
  &:hover {
    transition: ${({ filterRowData }) =>
      filterRowData?.length === 0 ? "none" : "all 300ms ease"};
    background-color: ${({ filterRowData }) =>
      filterRowData?.length === 0 ? "none" : "#20bfa9"};
  }
`;
