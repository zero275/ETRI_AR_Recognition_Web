import React, { useEffect, useState } from "react";
import TrainingBoxView from "@/pages/TRAINING/views/trainingBoxView";
import TrainingCardView from "@/pages/TRAINING/views/trainingCardView";
import TrainingCardInfoView from "@/pages/TRAINING/views/trainingCardInfoView";
import Container from "@/components/container";
import { AgGrid } from "@/components/agGrid";
import { MyButton } from "@/components/MyButton";
import Training_detail_info from "@/components/Training_detail_info copy";

const FAKE_JSON_DATA = require("@/assets/json/fake2.json");

const search1 = [{ name: "ETRI" }];
const search2 = [
  { building: "대덕비즈센터 A동" },
  { building: "대덕비즈센터 B동" },
  { building: "대덕비즈센터 C동" },
];

const search3 = [
  {
    floor: "1층",
  },
  {
    floor: "2층",
  },
  {
    floor: "3층",
  },
  {
    floor: "4층",
  },
  {
    floor: "5층",
  },
];
const search4 = [
  {
    site_id: "Brazil",
  },
  {
    site_id: "Russia",
  },
  {
    site_id: "China",
  },
  {
    site_id: "Canada",
  },
  {
    site_id: "Norway",
  },
];
const column1 = [
  {
    headerName: "ID",
    field: "id",
    headerCheckboxSelection: true, // 헤더에도 checkbox 추가
    checkboxSelection: true, // check box 추가
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "시나리오 이름",
    field: "scenarioName",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "사이트 ID",
    field: "siteId",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "건물 ID",
    field: "buildingId",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "층",
    field: "floor",
    cellStyle: { fontFamily: "Pretendard" },
  },
  // {
  //   headerName: "Route_wp",
  //   field: "Route_wp",
  //   cellStyle: { fontFamily: "Pretendard" },
  // },
  {
    headerName: "날짜",
    field: "date",
    cellStyle: { fontFamily: "Pretendard" },
  },
];

const TrainingContainer = () => {
  const [datasetRowData, setDatasetRowData] = useState([]);
  const [filterRowData, setFilterRowData] = useState([]);
  const [datasetDetails, setDatasetDetails] = useState({});
  const [processedRowData, setProcessedRowData] = useState([]);
  const [processedDetails, setProcessedDetails] = useState({});
  const [gridApi, setGridApi] = useState({});
  const [gridApi2, setGridApi2] = useState({});
  const [infoToggle, setInfoToggle] = useState(false);
  const [fileListToggle, setFileListToggle] = useState(false);
  const [handleData, setHandleData] = useState();

  // const btnList: string[] = ["Run Training", "Delete Dataset"];
  // const btnList2: string[] = ["Cancel Training", "Delete Dataset"];
  // const fileList: Array<FileListInterface> = [
  //   {
  //     filename: ".csv",
  //     size: "20KB",
  //   },
  //   {
  //     filename: "1.csv",
  //     size: "20KB",
  //   },
  //   {
  //     filename: "2.csv",
  //     size: "20KB",
  //   },
  // ];

  const onClickBtn = (e) => {
    console.log(gridApi.getSelectedRows());
  };

  const onClickRow = (e, idx) => {
    const rowData = e.data;
    console.log("rowData", rowData);
    if (JSON.stringify(rowData) === JSON.stringify(datasetDetails)) {
      setDatasetDetails({});
      return;
    }

    if (JSON.stringify(rowData) === JSON.stringify(processedDetails)) {
      setProcessedDetails({});
      return;
    }

    if (idx === "1") {
      setDatasetDetails({ ...rowData });
      setInfoToggle(true);
    } else if (idx === "2") {
      setProcessedDetails({ ...rowData });
    }
  };

  useEffect(() => {
    setDatasetRowData(FAKE_JSON_DATA);
    setHandleData(false);
  }, []);

  return (
    <main className="mainContainer">
      {/* 학습 데이터세트 */}
      <div className="containers">
        <Container title="학습 데이터세트 목록" addedCls="flex7">
          <span className="learning-title01">검색조건 :</span>
          <span className="select_title">회사명</span>
          <select
            className="learning-select"
            name="회사명"
            id="1"
            disabled={true}
          >
            {/* <option value="업체명">업체명</option> */}
            <option value="ETRI">{search1[0].name}</option>
          </select>
          <span className="select_title">건물명</span>
          <select className="learning-select" name="건물명" id="2">
            {search2.map((item, idx) => {
              return (
                <option key={idx} value="ETRI">
                  {search2[idx]?.building}
                </option>
              );
            })}
          </select>
          <span className="select_title">층수</span>
          <select className="learning-select" name="층수" id="3">
            {search3.map((item, idx) => {
              return (
                <option key={idx} value="ETRI">
                  {search3[idx]?.floor}
                </option>
              );
            })}
          </select>
          {/* 필터링 예제용 셀렉트 */}
          <select
            className="learning-select"
            id="3"
            placeholder="사이트ID"
            onChange={(e) => {
              let site_id = e.target.value;
              console.log("필터링 네임", site_id);
              console.log("가로전체데이터", datasetRowData);
              let date_filter_set = datasetRowData.filter(
                (item) => item.siteId === site_id
              );
              console.log("필터링되고 나온데이터", date_filter_set);
              setFilterRowData(date_filter_set);
              setHandleData(true);
            }}
          >
            {/* <option value="site_id">site_id</option> */}
            {search4.map((item, idx) => {
              return (
                <option key={idx} value={item.site_id}>
                  {search4[idx]?.site_id}
                </option>
              );
            })}
          </select>
          {/* <MyButton title="검색" onClickBtn={() => {}} /> */}
          <AgGrid
            setGridApi={setGridApi}
            gridApi={gridApi}
            onClickRow={onClickRow}
            data={handleData === false ? datasetRowData : filterRowData}
            setData={setDatasetRowData}
            column={column1}
            idx="1"
          />
          <div className="ag-btn-container">
            <MyButton title="Run Training" onClickBtn={onClickBtn} />
            <MyButton title="Delete" onClickBtn={onClickBtn} />
          </div>
        </Container>
        {infoToggle === true ? (
          <Training_detail_info
            setInfoToggle={setInfoToggle}
            datasetDetails={datasetDetails}
            setFileListToggle={setFileListToggle}
            fileListToggle={fileListToggle}
          />
        ) : null}
      </div>
      {/* 후처리리된 데이터세트 */}
      <div className="containers">
        <Container title="학습 모델 목록" addedCls="flex7">
          <AgGrid
            setGridApi={setGridApi2}
            gridApi={gridApi2}
            onClickRow={onClickRow}
            data={datasetRowData}
            settData={setDatasetRowData}
            column={column1}
            idx="2"
          />
          <div className="ag-btn-container">
            <MyButton title="Cancel Training" onClickBtn={onClickBtn} />
            <MyButton title="Delete" onClickBtn={onClickBtn} />
          </div>
        </Container>
      </div>
      {/* <TrainingBoxView />
      <div className="flex-column">
        <div className="flex-row">
          <TrainingCardView
            title="학습 데이터세트 목록"
            btnList={btnList}
            tableData={FAKE_JSON_DATA}
            tableId="table_training_dataset"
          />
          <TrainingCardInfoView
            title="데이터세트 상세정보"
            fileList={fileList}
          />
        </div>

        <div className="flex-row">
          <TrainingCardView
            title="학습 모델 목록"
            btnList={btnList2}
            tableData={FAKE_JSON_DATA}
            tableId="table_model_list"
          />
          <TrainingCardInfoView title="모델정보" fileList={fileList} />
        </div>
      </div> */}
    </main>
  );
};

export default TrainingContainer;
