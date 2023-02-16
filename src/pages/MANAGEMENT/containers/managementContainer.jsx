import React, { useState, useEffect } from "react";
import ManagementCardView from "@/pages/MANAGEMENT/views/managementCardView";
import ManagementBoxView from "@/pages/MANAGEMENT/views/managementBoxView";
import Container from "@/components/container";
import { AgGrid } from "@/components/agGrid";
import { MyButton } from "@/components/MyButton";
import { MyInputType1 } from "@/components/MyInput";
import { MyDropdown } from "@/components/MyDropdown";
import Table from "react-bootstrap/Table";
import ManagementTable from "@/components/ManagementTable";
import Management_detail_info from "@/components/Management_detail_info";
import Management_file_list from "@/components/Management_file_list";
import axios from "axios";

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
const column1 = [
  {
    headerName: "ID",
    field: "idx",
    headerCheckboxSelection: true, // 헤더에도 checkbox 추가
    checkboxSelection: true,
    showDisabledCheckboxes: true, // check box 추가
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "시나리오 이름",
    field: "scenario_name",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "사이트 ID",
    field: "site_id",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "건물 ID",
    field: "building_id",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "층(floor)",
    field: "floor",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "날짜",
    field: "dt_start",
    cellStyle: { fontFamily: "Pretendard" },
  },
];

const column2 = [
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
    headerName: "층(floor)",
    field: "floor",
    cellStyle: { fontFamily: "Pretendard" },
  },
  {
    headerName: "날짜",
    field: "date",
    cellStyle: { fontFamily: "Pretendard" },
  },
];

const ManagementContainer = () => {
  // 데이터세트 목록
  const [datasetRowData, setDatasetRowData] = useState([]);
  const [datasetDetails, setDatasetDetails] = useState({});
  const [processedRowData, setProcessedRowData] = useState([]);
  const [processedDetails, setProcessedDetails] = useState({});
  const [gridApi, setGridApi] = useState({});
  const [infoToggle, setInfoToggle] = useState(false);
  const [fileListToggle, setFileListToggle] = useState(false);
  const [] = useState();

  // const url2 = "";
  // useEffect(() => {
  //   const url = "http://192.168.219.111:8094/";
  //   axios
  //     .all({
  //       url: `${url}/api/collect/get-data-all`,
  //       method: "post",
  //       // data: { data:""},
  //     })
  //     .then((res) => {
  //       console.log("1212121====", res);
  //       setDatasetRowData(res.data.data_list);
  //     })
  //     .catch((e) => {
  //       console.log("실패", e);
  //     });
  // }, []);

  // -----------------------------================

  useEffect(() => {
    const url = "http://192.168.219.111:8094/";
    axios
      .all([
        axios.post(`${url}/api/collect/get-data-all`),
        { data: "CollectAll" },
        axios.post(`${url}/api/collect/get-dataset-details`),
        { data2: "" },
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1);
          console.log(res2);
        })
      )
      .catch((e) => {
        console.log("실패", e);
      });
  }, []);

  // =======================================

  // useEffect(() => {
  //   axios
  //     .post("http://192.168.219.111:8094", {
  //       site_id: "",
  //     })
  //     .then(function (response) {
  //       console.log("wwwww---", response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  const [payload, setPayload] = useState([
    {
      name: "location",
      label: "장소",
      value: "",
      placeholder: "입력해주세요",
      isFocus: false,
    },
    {
      name: "sizeoflocation",
      label: "장소크기",
      value: "",
      placeholder: "입력해주세요",
      isFocus: false,
    },
  ]);
  const [dropDown, setDropDown] = useState([
    {
      name: "location",
      label: "장소",
      value: "",
      placeholder: "입력해주세요",
      isFocus: false,
    },
  ]);
  useEffect(() => {}, []);

  const onClickBtn = (e) => {
    console.log(gridApi.getSelectedRows());
  };
  const onClickRow = (e, idx) => {
    const rowData = e.data;
    console.log("rowData", rowData);
    console.log("datasetDetails", datasetDetails);

    const dataInput = () => {
      if (idx === "1") {
        setDatasetDetails({ ...rowData });
        setInfoToggle(true);
      } else if (idx === "2") {
        setProcessedDetails({ ...rowData });
      }
    };
    dataInput();
  };

  return (
    <main className="mainContainer">
      {/* 학습 데이터세트 */}
      <div className="containers">
        <Container title="학습 데이터세트 목록" addedCls="flex7">
          <span className="learning-title01">검색조건</span>
          <select className="learning-select" name="회사명" id="1">
            {/* <option value="업체명">업체명</option> */}
            <option value="ETRI">{search1[0].name}</option>
          </select>
          <select className="learning-select" name="건물명" id="2">
            <option value="건물명">건물명</option>
            {search2.map((item, idx) => {
              return (
                <option key={idx} value="ETRI">
                  {search2[idx]?.building}
                </option>
              );
            })}
          </select>
          <select className="learning-select" name="층수" id="3">
            <option value="층수">층수</option>
            {search3.map((item, idx) => {
              return (
                <option key={idx} value="ETRI">
                  {search3[idx]?.floor}
                </option>
              );
            })}
          </select>
          {/* <div className="select-line" /> */}
          <AgGrid
            setGridApi={setGridApi}
            gridApi={gridApi}
            onClickRow={onClickRow}
            data={datasetRowData}
            setData={setDatasetRowData}
            column={column1}
            idx="1"
          />
          {/* <ManagementTable column2={column2} /> */}
          <div className="ag-btn-container">
            <MyButton title="Post Processing" onClickBtn={onClickBtn} />
            <MyButton title="Delete" onClickBtn={onClickBtn} />
          </div>
        </Container>
        {/* 데이터 상세정보 */}
        {infoToggle === true ? (
          <Management_detail_info
            setInfoToggle={setInfoToggle}
            datasetDetails={datasetDetails}
            setFileListToggle={setFileListToggle}
            fileListToggle={fileListToggle}
          />
        ) : null}
        {fileListToggle === true ? (
          <Management_file_list
            setInfoToggle={setInfoToggle}
            datasetDetails={datasetDetails}
            setFileListToggle={setFileListToggle}
            fileListToggle={fileListToggle}
          />
        ) : null}
      </div>

      {/* 1차 후처리된 데이터세트 */}
      <div className="containers">
        <Container title="후처리 데이터세트" addedCls="flex7">
          <AgGrid
            setGridApi={setGridApi}
            gridApi={gridApi}
            onClickRow={onClickRow}
            data={datasetRowData}
            setData={setDatasetRowData}
            column={column1}
            idx="2"
          />
          <div className="ag-btn-container">
            <MyButton title="Create Training Dataset" onClickBtn={onClickBtn} />
            <MyButton
              title="Delete PPT_training Dataset"
              onClickBtn={onClickBtn}
            />
            <MyButton title="Post Processing Status" onClickBtn={onClickBtn} />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default ManagementContainer;
