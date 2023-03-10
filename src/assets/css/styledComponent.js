import {
  COLOR
} from "@/constants/constant";
import {
  motion
} from "framer-motion";
import styled from "styled-components";

const DropDownSelection = styled(motion.div)
`
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > p {
    cursor: pointer;
  }
`;

export const FlexDiv = styled(motion.div)
`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexRowDiv = styled(motion.div)
`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlaceHolder = styled.p `
  color: grey;
  cursor: pointer;
`;

export const Content = styled.div `
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 3px solid grey;
  font-size: 1em;
  outline: none;
  margin-bottom: 1em;
  background-color: transparent;
  color: white;
`;

export const Label = styled.p `
  font-size: 1em;
  font-weight: 600;
`;

export const Container = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  ${Content} {
    border-bottom: 3px solid
      ${(props) => {
        return props?.focus ? `${COLOR.GREEN_PR}` : "grey";
      }};
  }
`;

export const TabContainer = styled.section `
  max-width: 1100px;
  width: 1000px;
  max-height: 700px;
  height: fit-content;
  overflow: auto;
`;

export const DetailInfo = styled.div `
  width: 100%;
`;