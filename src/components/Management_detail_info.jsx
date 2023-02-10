import Container from "@/components/container";
import { DetailInfo } from "@assets/css/styledComponent";
import { MyButton } from "@/components/MyButton";

export default function Management_detail_info({
  setInfoToggle,
  datasetDetails,
}) {
  return (
    <Container title="데이터 상세정보" addedCls="flex3" cls="basicContainer2nd">
      <DetailInfo className="Detail-info">
        <div className="detailContent">
          <span>이름</span>
          <span>{datasetDetails?.siteId}</span>
        </div>
        <div className="detailContent">
          <span>실험기간</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>실험장비</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>액션 수</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>액터 수</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>장소</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>장소 크기</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>총 RGB 영상 규모</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>총 Skeleton 규모</span>
          <span></span>
        </div>
        <div className="detailContent">
          <span>총 프레임 수</span>
          <span></span>
        </div>
      </DetailInfo>
      <MyButton title="파일목록 확인하기" />
      <div
        className="close_btn"
        onClick={() => {
          setInfoToggle(false);
        }}
      >
        {" "}
        X{" "}
      </div>
    </Container>
  );
}
