import { COLOR } from "@/constants/constant";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "@/components/loadingSpinner";
import MyPortal from "./MyPortal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faFileCsv,
  faFileExcel,
  faFileImage,
  faFilePdf,
  faFilePowerpoint,
  faFileText,
  faFileVideo,
  faFileWord,
  faFolderOpen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  Container,
  Content,
  FlexDiv,
  Label,
  PlaceHolder,
} from "@assets/css/styledComponent";

export const MyUpload = ({ dragover }) => {
  // 파일 리스트
  const [fileList, setFileList] = useState([]);
  // 로딩인지
  const [isLoading, setIsLoading] = useState(false);
  // input Ref
  const refUploadInput = useRef(null);
  // container Ref
  const refUploadContainer = useRef(null);

  const animation = useAnimation();

  // 파일을 선택할 때 호출
  const onChangeFile = (e) => {
    setIsLoading(true);

    const files = e.target.files;

    let filesArray = [];
    if (files) {
      filesArray = Array.from(files).map((file) => file);
    }
    console.log(filesArray);

    setFileList(filesArray);
    setIsLoading(false);

    // 초기화 : 같은 파일 구축 가능
    e.target.value = "";
  };

  // 파일을 지울 때 호출
  const onDelete = async (file, index) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList?.indexOf(file), 1);

    await animation.start((_index) => {
      if (index === _index) {
        return {
          opacity: 0,
          x: -1000,
        };
      } else {
        return {
          opacity: 1,
          // x: 100,
        };
      }
    });

    setFileList(updatedList);
  };

  // 파일 타입 별 icon 정해주기
  function imgByType(type) {
    if (type.includes("pdf")) {
      return <FontAwesomeIcon size="2x" icon={faFilePdf} />;
    } else if (type.includes("csv")) {
      return <FontAwesomeIcon size="2x" icon={faFileCsv} />;
    } else if (type.includes("excel") || type.includes("xlsx")) {
      return <FontAwesomeIcon size="2x" icon={faFileExcel} />;
    } else if (
      type.includes("word") ||
      type.includes("docx") ||
      type.includes("hwp")
    ) {
      return <FontAwesomeIcon size="2x" icon={faFileWord} />;
    } else if (type.includes("pptx")) {
      return <FontAwesomeIcon size="2x" icon={faFilePowerpoint} />;
    } else if (type.includes("image")) {
      return <FontAwesomeIcon size="2x" icon={faFileImage} />;
    } else if (type.includes("text")) {
      return <FontAwesomeIcon size="2x" icon={faFileText} />;
    } else if (type.includes("video")) {
      return <FontAwesomeIcon size="2x" icon={faFileVideo} />;
    } else return <FontAwesomeIcon size="2x" icon={faFile} />;
  }

  // directroy 불러오기 가능하게 하는 것
  React.useEffect(() => {
    if (refUploadInput.current !== null) {
      refUploadInput.current.setAttribute("directory", "");
      refUploadInput.current.setAttribute("webkitdirectory", "");
      refUploadInput.current.setAttribute("mozdirectory", "");
    }
  }, [refUploadInput]);

  // 로딩이면
  if (isLoading) {
    return (
      <MyPortal selector="#portal">
        <LoadingSpinner />
      </MyPortal>
    );
  }

  const item = {
    // hidden: { x: -60, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <>
      <StyledUploadContainer
        ref={refUploadContainer}
        dragover={dragover}
        onDragEnter={() => {
          if (refUploadContainer.current)
            refUploadContainer.current.classList.add("dragEnter");
        }}
        onDragLeave={() => {
          if (refUploadContainer.current)
            refUploadContainer.current.classList.remove("dragEnter");
        }}
        onDrop={() => {
          if (refUploadContainer.current)
            refUploadContainer.current.classList.remove("dragEnter");
        }}
      >
        <StyledUploadInput
          type="file"
          multiple
          ref={refUploadInput}
          onChange={(e) => {
            onChangeFile(e);
          }}
        />
        <FontAwesomeIcon icon={faFolderOpen} size="4x" />
        <span style={{ marginTop: "1em" }}>Drag or Drop directory here</span>
      </StyledUploadContainer>
      {/* 리스트 */}
      <StyledUploadList>
        {fileList.map((file, index) => {
          return (
            <AnimatePresence exitBeforeEnter={true}>
              <StyledUploadListContainer
                custom={index}
                key={file.name}
                animate={animation}
                variants={item}
                transition={{
                  duration: 0.3,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {imgByType(file.type)}
                  <li>{file?.name}</li>
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="clickable"
                    size="1x"
                    onClick={() => onDelete(file, index)}
                  />
                </motion.div>
              </StyledUploadListContainer>
            </AnimatePresence>
          );
        })}
      </StyledUploadList>
    </>
  );
};

export const MyUploadDir = ({ label, uploadDir, setUploadDir }) => {
  // input Ref
  const refUploadInput = useRef < HTMLInputElement > null;

  // 파일을 선택할 때 호출
  const onChangeFile = (e) => {
    const files = e.target.files;

    let filesArray = [];
    if (files) {
      filesArray = Array.from(files).map((file) => file);

      // ETRI/ch01/... 에서 대경로 ETRI만 추출 => ETRI
      const directoryPath = filesArray[0].webkitRelativePath.split("/")[0];
      setUploadDir(directoryPath);
    }

    // 초기화 : 같은 파일 구축 가능
    e.target.value = "";
  };

  // directroy 불러오기 가능하게 하는 것
  React.useEffect(() => {
    if (refUploadInput.current !== null) {
      refUploadInput.current.setAttribute("directory", "");
      refUploadInput.current.setAttribute("webkitdirectory", "");
      refUploadInput.current.setAttribute("mozdirectory", "");
    }
  }, [refUploadInput]);
  return (
    <FlexDiv>
      <Container>
        <Label>{label}</Label>
        <Content>
          {uploadDir ? (
            <p>{uploadDir}</p>
          ) : (
            <PlaceHolder>선택해주세요</PlaceHolder>
          )}
          <StyledUploadInput
            type="file"
            multiple
            ref={refUploadInput}
            onChange={(e) => {
              onChangeFile(e);
            }}
          />
        </Content>
      </Container>
    </FlexDiv>
  );
};

//styled-component
const StyledUploadListContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #504c4c;
  border-radius: 20px;
  margin-bottom: 1em;
`;

const StyledUploadContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px dashed ${COLOR.GREEN_PR};
  border-radius: 20px;
  padding: 2em;
  margin-bottom: 2em;

  &:hover {
    opacity: 0.6;
  }
`;

const StyledUploadInput = styled.input`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const StyledUploadList = styled.ul`
  overflow: auto;
  max-height: 60vh;
  li {
    font-size: 1em;
    margin-left: 1em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
