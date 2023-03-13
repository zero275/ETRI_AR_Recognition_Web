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

// export const Mp4Container = styled.div `
// width :150px;
// height: auto;
// `;

export const ModalContainer = styled.div `
width : 100%;
height : 100%;
margin-top : 0px;
display:flex;
align-items: center;
justify-content: center`;

export const BtnBetween = styled.span `
width : 2px;
height : 40px;
display :inline-block;
margin:0px 35px 0px 20px;
background-color:grey;
`
export const ProgressBar = styled.div `
transform:translate(0px,30px);
width:100%;
height:1em;
border-radius:20px;
background-color:grey;
display :inline-block;
overflow :hidden;
`;
export const ProgressBarInner = styled.span `
width :${(props)=>props.width}px;
transform:translateX(0px);
height : 1em;
border-radius:10px;
background-color:white;
display :inline-block;
`;

export const CsvView = styled.div `
width:100%;
height:700px;
overflow-y: scroll;
background-color:transparent;`;