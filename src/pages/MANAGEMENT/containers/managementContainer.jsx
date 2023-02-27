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
    // headerCheckboxSelection: true, // 헤더에도 checkbox 추가
    // checkboxSelection: true,
    // showDisabledCheckboxes: true, // check box 추가
    // cellStyle: { fontFamily: "Pretendard" },
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
  {
    headerName: "전처리여부",
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
  const [companyValue, setCompanyValue] = useState("");
  const [filterValue001, setFilterValue001] = useState([]);
  const [filterValue002, setFilterValue002] = useState([]);
  const [filterValue003, setFilterValue003] = useState([]);
  const [buildingOptionValue, setBuildingOptionValue] = useState();
  const [floorOptionValue, setFloorOptionValue] = useState("");
  const [rowDataIdx, setRowDataIdx] = useState();
  const [fileList, setFileList] = useState();
  const [rowDataDetail, setRowDataDetail] = useState();
  const [rowDataFileList, setRowDAtaFileList] = useState();
  const [preProcessingIdx, setPreProcessingIdx] = useState();
  const [preProcessingData, setPreProcessingData] = useState();
  const [preBtnHelp, setPreBtnHelp] = useState("");
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
    axios
      .all([
        axios.post(`${url}/api/collect/get-data-all`),
        axios.post(`${url}/api/collect/get-dataset-filter`),
        // axios.post(`${url}/api/collect/get-dataset-details`, rowDataIdx),
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        },
        // { site_id: "", building_id: "", floor: "" },
      ])
      .then(
        axios.spread((res1, res2, res3) => {
          // console.log("전체데이터", res1);
          // console.log("필터링데이터", res2);
          // console.log("상세정보데이터", res3);
          setDatasetRowData(res1.data.data_list);
          setFilterValue001(res2.data.data_site);
          setFilterValue002(res2.data.data_building);
          setFilterValue003(res2.data.data_floor);
          // console.log("전체데이터", datasetRowData);
          // console.log("필터내용데이터", res2.data);
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
    // console.log(gridApi.getSelectedRows());
    axios
      .post(
        `${url}/api/collect/get-ppdataset-list`,
        { idx: preProcessingIdx },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then(function (response) {
        console.log("상세정보 데이터", response);
        setPreProcessingData(response.data.data_list);
      })
      .catch(function (error) {
        console.log(error);
      });
    setPreBtnHelp("preBtnHelpNone");
  };
  const onDeleteRow = (e) => {
    let delConfirm = window.confirm("데이터를 정말 삭제하시겠습니까?");
    console.log("컨펌 결과값", delConfirm);
    function conformTrue() {}
    if (delConfirm === true) {
      setFilterRowData([]);
      setPreProcessingData([]);
    }
  };
  const onClickRow = (e, idx) => {
    const rowData = e.data;
    console.log("가로 눌렀을때 나오는 데이터", rowData);
    const rowDataIdx = e.data.idx;
    setRowDataIdx(rowDataIdx);
    // console.log("rowData", rowData.idx);
    // console.log("datasetDetails", datasetDetails);
    // console.log("인덱스의 타입은 뭘까요", rowDataIdx);

    axios
      .post(
        `${url}/api/collect/get-dataset-details`,
        { idx: rowDataIdx },
        {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      )
      .then(function (response) {
        console.log("상세정보 데이터", response);
        setFileList(response);
        console.log("파일리스트", fileList);
        setRowDataDetail(response.data.details);
        setRowDAtaFileList(response.data.file_list);
        setInfoToggle(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    const dataInput = () => {
      if (idx === "1") {
        setDatasetDetails({ ...rowData });
      } else if (idx === "2") {
        setProcessedDetails({ ...rowData });
      }
    };
    dataInput();
  };
  const BuildingFilter = (e) => {
    let buliding_id = e.target.value;
    console.log("필터링 네임(건물)", buliding_id);
    setBuildingOptionValue(buliding_id);

    let buliding_filter_set =
      // filterRowData === undefined ||
      // filterRowData === null ||
      floorOptionValue === "" ||
      floorOptionValue === undefined ||
      floorOptionValue === null
        ? datasetRowData.filter((item) => item.building_id === buliding_id)
        : datasetRowData.filter(
            (item) =>
              item.building_id === buliding_id &&
              item.floor === floorOptionValue
          );
    console.log("필터링되고 나온데이터(건물)", buliding_filter_set);
    setFilterRowData(buliding_filter_set);
  };
  const BuildingFilter2 = () => {
    let buliding_filter_set = datasetRowData.filter(
      (item) => item.building_id === buildingOptionValue
    );
    console.log("필터링되고 나온데이터(건물)", buliding_filter_set);
    setFilterRowData(buliding_filter_set);
  };
  const FloorFilter = (e) => {
    let floor_id = e.target.value;
    console.log("필터링 네임(층)", floor_id);
    setFloorOptionValue(floor_id);
    let floor_filter_set =
      // filterRowData === undefined ||
      // filterRowData === null ||
      buildingOptionValue === undefined ||
      buildingOptionValue == "" ||
      buildingOptionValue === null
        ? datasetRowData.filter((item) => item.floor === floor_id)
        : datasetRowData.filter(
            (item) =>
              item.floor === floor_id &&
              item.building_id === buildingOptionValue
          );
    // {
    //   floor_filter_set == null &&
    //     console.log("표시할 데이터가 없습니다");
    // }
    setFilterRowData(floor_filter_set);

    return;
  };
  const floorFilter2 = () => {
    let floor_filter_set = datasetRowData.filter(
      (item) => item.floor === floorOptionValue
    );
    setFilterRowData(floor_filter_set);
  };
  // console.log("필터링 스테이트네임(건물)", buildingOptionValue);
  console.log("필터링되고 나온 데이터", filterRowData);
  // console.log("선택된 내용의 세부정보", rowDataDetail);
  // console.log("선택된 내용의 파일목록", rowDataFileList);
  // console.log("상세정보 목록의 타입은 뭘까요~~", typeof rowDataDetail);
  console.log("프리프로세싱에 넘겨줄 IDX데이터", preProcessingIdx);
  console.log("후처리가 된 데이터", preProcessingData);
  console.log("그래서 건물 네이밍이 뭔데", buildingOptionValue);
  console.log("그래서 층 네이밍이 뭔데", floorOptionValue);

  useEffect(() => {
    let preFilterData = filterRowData.map((e) => e.idx);
    let sortPreFileterData = preFilterData.sort();
    setPreProcessingIdx(sortPreFileterData);
  }, [filterRowData]);
  useEffect(() => {
    setPreBtnHelp("preBtnHelp");
  }, [filterRowData]);

  function EmptyFloorOption() {
    setFloorOptionValue("");
    BuildingFilter();
  }

  return (
    <main className="mainContainer">
      {/* 학습 데이터세트 */}
      <div className="containers">
        <Container title="수집 데이터세트 목록" addedCls="flex7">
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
              BuildingFilter(e);
              setPreProcessingData();
              e.target.value === "" && floorFilter2();
            }}
          >
            <option value="">비선택</option>
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
              FloorFilter(e);
              setPreProcessingData();
              e.target.value === "" && BuildingFilter2();
            }}
          >
            <option value="">비선택</option>
            {filterValue003.map((item, idx) => {
              return (
                <option key={idx} value={item.floor}>
                  {filterValue003[idx]?.floor}
                </option>
              );
            })}
          </select>
          {filterRowData.length !== 0 ? null : (
            <span className="notFoundData ">
              ※ 조건에 해당하는 데이터가 없어 전체 데이터를 표시합니다.
            </span>
          )}

          {/* <div className="select-line" /> */}
          <AgGrid
            setGridApi={setGridApi}
            gridApi={gridApi}
            onClickRow={onClickRow}
            data={filterRowData.length === 0 ? datasetRowData : filterRowData}
            setData={setDatasetRowData}
            column={column1}
            rowSelection={"multiple"}
            idx="1"
            type="single"
          />
          {/* <ManagementTable column2={column2} /> */}
          <div className="ag-btn-container">
            <MyButton title="Pre Processing" onClickBtn={onClickBtn} />
            <MyButton title="Delete" disable="true" onClickBtn={onDeleteRow} />
          </div>
          {filterRowData.length !== 0 || preBtnHelp !== "" ? (
            <span className={preBtnHelp}>
              ▲ 조건입력이 완료 되셨으면 Pre Processing을 진행하세요
            </span>
          ) : null}
        </Container>
        {/* 데이터 상세정보 */}
        {infoToggle === true ? (
          <Management_detail_info
            setInfoToggle={setInfoToggle}
            datasetDetails={datasetDetails}
            setFileListToggle={setFileListToggle}
            fileListToggle={fileListToggle}
            rowDataDetail={rowDataDetail}
          />
        ) : null}
        {/* 파일목록 */}
        {fileListToggle === true ? (
          <Management_file_list
            setInfoToggle={setInfoToggle}
            datasetDetails={datasetDetails}
            setFileListToggle={setFileListToggle}
            fileListToggle={fileListToggle}
            setRowDataDetail={setRowDataDetail}
            rowDataFileList={rowDataFileList}
            setRowDAtaFileList={setRowDAtaFileList}
          />
        ) : null}
      </div>

      {/* 1차 후처리된 데이터세트 */}
      <div className="containers">
        <Container title="전처리 데이터세트" addedCls="flex7">
          <AgGrid
            setGridApi={setGridApi}
            gridApi={gridApi}
            onClickRow={onClickRow}
            data={
              preProcessingData !== undefined ||
              preProcessingData !== null ||
              preProcessingData.length !== 0
                ? preProcessingData
                : null
            }
            setData={setDatasetRowData}
            column={column1}
            idx="2"
            type="multiple"
          />
          <div className="ag-btn-container">
            <MyButton title="Create Training Dataset" onClickBtn={onClickBtn} />
            <MyButton
              title="Delete PPT_training Dataset"
              onClickBtn={onClickBtn}
            />
            <MyButton title="Pre Processing Status" onClickBtn={onClickBtn} />
          </div>
        </Container>
      </div>
    </main>
  );
};

export default ManagementContainer;
