import { COLOR } from "@/constants/constant";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { isTwoObjectsTheSame } from "@/utils/common/commonUtils";
import { AnimatePresence, motion } from "framer-motion";
import { MyModalNoFooter } from "./MyModal";
import {
  Container,
  Content,
  FlexDiv,
  Label,
  PlaceHolder,
} from "@assets/css/styledComponent";

export const MyDropdown = ({ payload, setPayload, selectlist }) => {
  //모달 state
  const [isModalOpen, setIsModalOpen] = useState(false);
  //
  const variants = {
    open: {
      rotate: 180,
    },
    close: {
      rotate: 0,
    },
  };

  // 모달 닫을 때 호출
  const onCancelModal = () => {
    const updatedList = payload.map((_list) => {
      return {
        ..._list,
        isFocus: !_list.isFocus,
      };
    });
    setPayload(updatedList);
    setIsModalOpen(false);
  };

  const onSelectList = (e, list, value) => {
    setPayload([{ ...list, value }]);
  };
  return (
    <FlexDiv>
      {payload.map((list) => {
        return (
          <Container focus={list.isFocus}>
            <Label>{list.label}</Label>
            <Content
              data={list}
              onClick={() => {
                const updatedList = payload.map((_list) => {
                  if (isTwoObjectsTheSame(list, _list)) {
                    return {
                      ..._list,
                      isFocus: !_list.isFocus,
                    };
                  } else {
                    return {
                      ..._list,
                      isFocus: !_list.isFocus,
                    };
                  }
                });

                setPayload(updatedList);
                setIsModalOpen(true);
              }}
            >
              {list.value ? (
                <p>{list.value}</p>
              ) : (
                <PlaceHolder>선택해주세요</PlaceHolder>
              )}
              <IconContainer
                animate={list.isFocus ? "open" : "closed"}
                variants={variants}
                transition={{
                  duration: 0.05,
                  type: "tween",
                }}
              >
                <FontAwesomeIcon size="1x" icon={faCaretDown} />
              </IconContainer>
            </Content>
            <AnimatePresence>
              {isModalOpen && (
                <MyModalNoFooter title="선택하기" onCancel={onCancelModal}>
                  {selectlist?.map((dropdown) => {
                    return (
                      <DropDownSelection
                        onClick={(e) => onSelectList(e, list, dropdown)}
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <p>{dropdown}</p>
                        {dropdown === list.value && (
                          <p>
                            <FontAwesomeIcon
                              size="1x"
                              icon={faCheck}
                              color={COLOR.YELLOW_PR}
                            />
                          </p>
                        )}
                      </DropDownSelection>
                    );
                  })}
                </MyModalNoFooter>
              )}
            </AnimatePresence>
          </Container>
        );
      })}
    </FlexDiv>
  );
};

// styled-components

const DropDownSelection = styled(motion.div)`
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > p {
    cursor: pointer;
  }
`;

const IconContainer = styled(motion.div)`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: 0;
  transition: all ease 0.4s;
  transform: ${({ focus }) => focus && "rotate(180deg)"};
`;
