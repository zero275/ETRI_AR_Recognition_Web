import Container from "@/components/container";
import { DetailInfo } from "@assets/css/styledComponent";
import { MyButton } from "@/components/MyButton";

export default function Management_detail_info({
  setInfoToggle,
  datasetDetails,
  setFileListToggle,
  fileListToggle,
  rowDataDetail,
}) {
  return (
    <>
      <Container
        title="데이터 상세정보"
        addedCls="flex3"
        cls="basicContainer2nd"
      >
        {rowDataDetail.length !== 0 ||
        rowDataDetail !== undefined ||
        rowDataDetail !== null ? (
          <DetailInfo className="Detail-info">
            <div className="detailContent">
              <span>Building</span>
              <span>{rowDataDetail[0].Building}</span>
            </div>
            <div className="detailContent">
              <span>End time</span>
              <span>{rowDataDetail[0].End_time}</span>
            </div>
            <div className="detailContent">
              <span>Floor</span>
              <span>{rowDataDetail[0].Floor}</span>
            </div>
            <div className="detailContent">
              <span>Ground Truth</span>
              <span>{rowDataDetail[0].Ground_Truth}</span>
            </div>
            <div className="detailContent">
              <span>Phone Model</span>
              <span>{rowDataDetail[0].Phone_Model}</span>
            </div>
            <div className="detailContent">
              <span>Route_waypoints</span>
              <span>{rowDataDetail[0].Route_waypoints}</span>
            </div>
            <div className="detailContent">
              <span>Scenario</span>
              <span>{rowDataDetail[0].Scenario}</span>
            </div>
            <div className="detailContent">
              <span>Site</span>
              <span>{rowDataDetail[0].Site}</span>
            </div>
            <div className="detailContent">
              <span>Start time</span>
              <span>{rowDataDetail[0].Start_time}</span>
            </div>
            <div className="detailContent">
              <span>User</span>
              <span>{rowDataDetail[0].User}</span>
            </div>
          </DetailInfo>
        ) : (
          <div className="noFileMsg">해당하는 데이터가 없습니다.</div>
        )}
        {console.log("데이터가 잘 넘어왔나요요요요", rowDataDetail)}

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
