import Container from "@/components/container";
import { DetailInfo } from "@assets/css/styledComponent";

export default function Management_file_list({
  setInfoToggle,
  datasetDetails,
  setFileListToggle,
  fileListToggle,
}) {
  const file_ojt = [
    { idx: "0", name: "recording.mp4", size: "50MB" },
    { idx: "1", name: "collection.json", size: "0.5KB" },
    { idx: "2", name: "pose.csv", size: "54KB" },
    { idx: "3", name: "mark.csv", size: "22.6KB" },
    { idx: "4", name: "gyro.csv", size: "22.4KB" },
  ];
  return (
    <Container title="파일 목록" addedCls="flex2" cls="basicContainer2nd">
      <table className="file_list_table">
        <thead>
          <th>파일명</th>
          <th>size</th>
        </thead>
        <tbody>
          {file_ojt.map((item, idx) => {
            return (
              <tr>
                <td>{file_ojt[idx].name}</td>
                <td>{file_ojt[idx].size}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="close_btn"
        onClick={() => {
          setFileListToggle(false);
          return "hello";
        }}
      >
        X{" "}
      </div>
    </Container>
  );
}
