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
    floor: "1F",
  },
  {
    floor: "2F",
  },
  {
    floor: "3F",
  },
  {
    floor: "4F",
  },
  {
    floor: "5F",
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
  const [filterRowData, setFilterRowData] = useState([]);
  const [datasetDetails, setDatasetDetails] = useState({});
  const [processedRowData, setProcessedRowData] = useState([]);
  const [processedDetails, setProcessedDetails] = useState({});
  const [gridApi, setGridApi] = useState({});
  const [infoToggle, setInfoToggle] = useState(false);
  const [fileListToggle, setFileListToggle] = useState(false);
  const [filter01, setFilter01] = useState([]);
  const [companyValue, setCompanyValue] = useState("");
  const [filterValue001, setFilterValue001] = useState([]);
  const [filterValue002, setFilterValue002] = useState([]);
  const [filterValue003, setFilterValue003] = useState([]);
  const [siteOptionValue, setSiteOptionValue] = useState();
  const [floorOptionValue, setFloorOptionValue] = useState();
  const [buildingFilterValue, setBuildingFilterValue] = useState();
  const [floorFilterValue, setFloorFilterValue] = useState();
  const [handleData001, setHandleData001] = useState();
  const [handleData002, setHandleData002] = useState();
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
        axios.post(`${url}/api/collect/get-dataset-filter`),
        // axios.post(`${url}/api/collect/get-dataset-details`),
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        },
        // { site_id: "", building_id: "", floor: "" },
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          console.log("222aada", res1);
          console.log("222aada===", res2);
          // console.log("vvvvvvvvvvvvv", res3);
          setDatasetRowData(res1.data.data_list);
          setFilterValue001(res2.data.data_site);
          setFilterValue002(res2.data.data_building);
          setFilterValue003(res2.data.data_floor);
          console.log("표시데이터222", datasetRowData);
          console.log("필터내용데이터", res2.data);
        })
      )
      .catch((e) => {
        console.log("실패", e);
      });
    setHandleData001(false);
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
          <span className="learning-title01">검색조건 : </span>
          <span className="select_title">회사명</span>
          <select
            className="learning-select"
            name="회사명"
            id="1"
            onChange={(e) => {
              setCompanyValue(e.target.value);
            }}
            disabled={true}
          >
            {/* <option value="업체명">업체명</option> */}
            {filterValue001.map((item, idx) => {
              return (
                <option key={idx} value={item.site_id}>
                  {filterValue001[1].site_id}
                </option>
              );
            })}
          </select>
          <span className="select_title">건물명</span>
          <select
            className="learning-select"
            name="건물명"
            id="2"
            onChange={(e) => {
              let buliding_id = e.target.value;
              console.log("필터링 네임(건물)", buliding_id);
              let buliding_filter_set =
                floorFilterValue === undefined
                  ? datasetRowData.filter(
                      (item) => item.building_id === buliding_id
                    )
                  : floorFilterValue.filter(
                      (item) => item.building_id === buliding_id
                    );
              console.log("필터링되고 나온데이터(건물)", buliding_filter_set);
              setBuildingFilterValue(buliding_filter_set);
              setHandleData001(true);
            }}
          >
            {filterValue002.map((item, idx) => {
              return (
                <option key={idx} value={item.building_id}>
                  {filterValue002[idx].building_id}
                </option>
              );
            })}
          </select>
          <span className="select_title">층수</span>
          <select
            className="learning-select"
            name="층수"
            id="3"
            onChange={(e) => {
              let floor_id = e.target.value;
              console.log("필터링 네임(층)", floor_id);
              let floor_filter_set =
                buildingFilterValue === undefined
                  ? datasetRowData.filter((item) => item.floor === floor_id)
                  : buildingFilterValue.filter(
                      (item) => item.floor === floor_id
                    );
              // {
              //   floor_filter_set == null &&
              //     console.log("표시할 데이터가 없습니다");
              // }
              console.log("필터링되고 나온데이터(층)", floor_filter_set);
              setFloorFilterValue(floor_filter_set);
            }}
          >
            {filterValue003.map((item, idx) => {
              return (
                <option key={idx} value={item.floor}>
                  {filterValue003[idx]?.floor}
                </option>
              );
            })}
          </select>

          {/* <div className="select-line" /> */}
          <AgGrid
            setGridApi={setGridApi}
            gridApi={gridApi}
            onClickRow={onClickRow}
            data={
              handleData001 === false ? datasetRowData : buildingFilterValue
            }
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
