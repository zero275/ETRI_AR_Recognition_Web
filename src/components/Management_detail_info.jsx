import Container from "@/components/container";
import { DetailInfo } from "@assets/css/styledComponent";
import { MyButton } from "@/components/MyButton";

export default function Management_detail_info({
  setInfoToggle,
  datasetDetails,
  setFileListToggle,
  fileListToggle,
}) {
  return (
    <>
      <Container
        title="데이터 상세정보"
        addedCls="flex2"
        cls="basicContainer2nd"
      >
        {datasetDetails !== 0 ||
        datasetDetails !== undefined ||
        datasetDetails !== null ? (
          <DetailInfo className="Detail-info">
            <div className="detailContent">
              <span>user</span>
              <span>{datasetDetails?.id}</span>
            </div>
            <div className="detailContent">
              <span>route file</span>
              <span>{datasetDetails?.scenarioName}</span>
            </div>
            <div className="detailContent">
              <span>backpack</span>
              <span>{datasetDetails?.siteId}</span>
            </div>
            <div className="detailContent">
              <span>phonemodel</span>
              <span>{datasetDetails?.date}</span>
            </div>
            <div className="detailContent">
              <span>length</span>
              <span>1:25</span>
            </div>
            <div className="detailContent">
              <span>dataset filepath</span>
              <span>{datasetDetails?.siteId}</span>
            </div>
            {/* <div className="detailContent">
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
          </div> */}
          </DetailInfo>
        ) : null}

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
