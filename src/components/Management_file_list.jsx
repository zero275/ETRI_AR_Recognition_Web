import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { DetailInfo } from "@assets/css/styledComponent";
import ReactPlayer from "react-player/lazy";
import play001 from "@assets/mp4/play001.mp4";

export default function Management_file_list({
  setInfoToggle,
  datasetDetails,
  setFileListToggle,
  fileListToggle,
  rowDataDetail,
  setRowDataDetail,
  rowDataFileList,
  setRowDAtaFileList,
}) {
  // const file_ojt = [
  //   { idx: "0", name: "recording.mp4", size: "50MB" },
  //   { idx: "1", name: "collection.json", size: "0.5KB" },
  //   { idx: "2", name: "pose.csv", size: "54KB" },
  //   { idx: "3", name: "mark.csv", size: "22.6KB" },
  //   { idx: "4", name: "gyro.csv", size: "22.4KB" },
  // ];
  console.log("넘겨받은 파일목록", rowDataFileList);
  const [handleMp4, setHandleMp4] = useState(false);
  return (
    <Container title="파일 목록" addedCls="flex2" cls="basicContainer2nd">
      <table className="file_list_table">
        <thead>
          <th>파일명</th>
          <th>size</th>
        </thead>
        <tbody>
          {rowDataFileList != undefined || rowDataFileList != null ? (
            rowDataFileList.map((item, idx) => {
              return (
                <>
                  <tr>
                    <td
                      className="openFile"
                      onClick={() => {
                        setHandleMp4(true);
                      }}
                    >
                      <div>
                        {handleMp4 === true ? (
                          <ReactPlayer
                            url={play001}
                            playing={false}
                            controls={true}
                            loop={true}
                            muted={true}
                            playsinline={true}
                          />
                        ) : null}
                      </div>
                      {rowDataFileList[idx]?.name}
                    </td>

                    <td>{rowDataFileList[idx]?.size}</td>
                  </tr>
                </>
              );
            })
          ) : (
            <div className="noFileMsg">해당하는 파일이 없습니다</div>
          )}
        </tbody>
      </table>
      <div
        className="close_btn"
        onClick={() => {
          setFileListToggle(false);
          setHandleMp4(false);
          return "hello";
        }}
      >
        X{" "}
      </div>
    </Container>
  );
}
