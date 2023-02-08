import { COLOR } from "@/constants/constant";
import React from "react";
import styled from "styled-components";

export const MyInputType1 = ({ payload, setPayload }) => {
  return (
    <FlexDiv>
      {payload.map((list) => {
        return (
          <InputContainer data={list}>
            <StyledLabel className="labelInput" htmlFor="input">
              {list.label}
            </StyledLabel>
            <StyledInput
              name={list.name}
              data={list}
              placeholder={list.placeholder}
            ></StyledInput>
          </InputContainer>
        );
      })}
    </FlexDiv>
  );
};

// styled-compoenent
const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  font-size: 1em;
  outline: none;
  margin-bottom: 1em;
  background-color: transparent;
  color: white;
`;

const StyledLabel = styled.label`
  font-size: 1em;
  font-weight: 600;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  & > label {
    color: ${(props) => {
      if (props.data.isWrong) {
        return "red";
      } else {
        return "grey";
      }
    }};
  }

  ${StyledInput} {
    border-bottom: 3px solid
      ${(props) => {
        if (props.data.isWrong) {
          return "red";
        } else {
          return "grey";
        }
      }};
    &:focus {
      border-bottom: 3px solid ${COLOR.GREEN_PR};
    }
  }
`;
