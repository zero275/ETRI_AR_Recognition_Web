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
  const [infoToggle, setInfoToggle] = useState("false");
  const [fileListToggle, setFileListToggle] = useState("false");
  const [filter01, setFilter01] = useState([]);
  const [companyValue, setCompanyValue] = useState("");
  const [buildingValue, setBuildingValue] = useState("");

  let url = "http://192.168.219.204:8095";
  // useEffect(() => {
  //   axios({
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json charset=utf-8",
  //     },
  //     url: `${url}/api/collect/get-data-all/`,
  //     dataset_list: "",
  //   })
  //     .then((res) => {
  //       console.log("1212121====", res);
  //       setFilter01(res.data.building_list);
  //       console.log("filter01", filter01);
  //       // setDatasetRowData(res.data.data_list);
  //     })
  //     .catch((e) => {
  //       console.log("실패", e);
  //     });
  // }, []);

  // -----------------------------================

  useEffect(() => {
    const url = "http://192.168.219.204:8095/";
    axios
      .all([
        axios.post(`${url}/api/collect/get-data-all`),
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        },
        { data: "" },
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log("222aada", res1);
        })
      )
      .catch((e) => {
        console.log("실패", e);
      });
  }, []);

  // =======================================

  // useEffect(() => {
  //   const url = "http://192.168.219.204:8095/";
  //   axios
  //     .post(`${url}/api/collect/get-data-all`, {
  //       data: "",
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
      isFocus: "false",
    },
    {
      name: "sizeoflocation",
      label: "장소크기",
      value: "",
      placeholder: "입력해주세요",
      isFocus: "false",
    },
  ]);
  const [dropDown, setDropDown] = useState([
    {
      name: "location",
      label: "장소",
      value: "",
      placeholder: "입력해주세요",
      isFocus: "false",
    },
  ]);

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

          <span className="select_title">회사명</span>
          <select
            className="learning-select"
            name="회사명"
            id="1"
            onChange={(e) => {
              setCompanyValue(e.target.value);
            }}
          >
            {/* <option value="업체명">업체명</option> */}
            <option value="ETRI">ETRI</option>
          </select>
          <span className="select_title">건물명</span>
          <select
            className="learning-select"
            name="건물명"
            id="2"
            onChange={(e) => {
              setBuildingValue(e.target.value);
              console.log(buildingValue);
              axios({
                method: "post",
                headers: {
                  "Content-Type": "application/json charset=utf-8",
                },
                url: `${url}/api/collect/get-dataset-filter`,
                data: {
                  building_id: buildingValue,
                },
              })
                .then((res) => {
                  console.log("999999888---", res);
                  setFilter01(res);
                  console.log("filter01", filter01);
                  // setDatasetRowData(res.data.data_list);
                })
                .catch((e) => {
                  console.log("실패", e);
                });
            }}
          >
            {filter01.map((item, idx) => {
              return (
                <option key={idx} value={filter01[idx]}>
                  {filter01[idx]}
                </option>
              );
            })}
          </select>
          {buildingValue !== "" ? (
            <>
              <span className="select_title">층수</span>
              <select
                className="learning-select"
                name="층수"
                id="3"
                onChange={(e) => {}}
              >
                {search3.map((item, idx) => {
                  return (
                    <option key={idx} value="ETRI">
                      {search3[idx]?.floor}
                    </option>
                  );
                })}
              </select>
              <button>검색</button>
            </>
          ) : null}

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
