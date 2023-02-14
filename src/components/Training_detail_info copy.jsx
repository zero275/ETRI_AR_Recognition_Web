import Container from "@/components/container";
import { DetailInfo } from "@assets/css/styledComponent";
import { MyButton } from "@/components/MyButton";

export default function Training_detail_info({
  setInfoToggle,
  datasetDetails,
  setFileListToggle,
  fileListToggle,
}) {
  return (
    <>
      <Container
        title="데이터 상세정보"
        addedCls="flex3"
        cls="basicContainer2nd"
      >
        <DetailInfo className="Detail-info">
          <div className="detailContent">
            <span>ID Number</span>
            <span>{datasetDetails?.id}</span>
          </div>
          <div className="detailContent">
            <span>시나리오 네임</span>
            <span>{datasetDetails?.scenarioName}</span>
          </div>
          <div className="detailContent">
            <span>지역명</span>
            <span>{datasetDetails?.siteId}</span>
          </div>
          <div className="detailContent">
            <span>촬영일</span>
            <span>{datasetDetails?.date}</span>
          </div>
          <div className="detailContent">
            <span>액터 수</span>
            <span></span>
          </div>
          <div className="detailContent">
            <span>장소</span>
            <span>{datasetDetails?.siteId}</span>
          </div>
          <div className="detailContent">
            <span>장소 크기</span>
            <span>{datasetDetails?.floor}</span>
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
        <button
          className="file_list_on"
          onClick={() => {
            setFileListToggle(true);
          }}
        >
          파일 리스트
        </button>
        <div
          className="close_btn"
          onClick={() => {
            setInfoToggle(false);
            setFileListToggle(false);
            return "hello";
          }}
        >
          X{" "}
        </div>
      </Container>
      {/* {fileListToggle === true ? :} */}
    </>
  );
}
