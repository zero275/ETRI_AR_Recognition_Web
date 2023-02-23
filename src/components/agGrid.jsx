import React, { useRef, useState, useMemo } from "react";
import { AgGridReact, AgGridColumn } from "ag-grid-react"; // the AG Grid React Component
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional theme CSS
import "ag-grid-community/styles/ag-theme-material.css"; // Optional theme CSS

export const AgGrid = ({
  setGridApi,
  gridApi,
  onClickRow,
  data,
  column,
  idx = "0", // default = '0"
  type = "multiple", //default = "single"
}) => {
  const gridRef = useRef();

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
    }),
    []
  );

  //  그리드가 초기화 될 때, gridReady 를 호출함
  const onGridReady = (params) => {
    setGridApi(params.api);
    const updateData = (data) => params.api.setRowData(data);
  };

  // checkbox 선택 호출
  const onSelectionChanged = () => {
    // gridApi.getSelectedRows() => 부모에서 불러온 gridApi 안에 선택한 데이터 저장함
    const selectedData = gridApi.getSelectedRows();
  };

  return (
    <div
      className="ag-theme-alpine-dark" // pick theme
      style={{ width: "100%", height: 500, position: "relative" }}
    >
      {/**
       * 자세한 설정 값이 궁금할 때는
       * https://eblo.tistory.com/32
       * https://www.ag-grid.com/javascript-data-grid/
       * 참고 하세요
       */}
      <AgGridReact
        ref={gridRef} // Ref for accessing Grid's API
        rowData={data} // Row Data for Rows
        columnDefs={column} // Column Defs for Columns
        defaultColDef={defaultColDef} // Default Column Properties
        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
        rowSelection={type} // Options - allows click selection of rows
        onCellClicked={(e) => onClickRow(e, idx)} // Optional - registering for Grid Event
        sideBar={{
          toolPanels: ["columns", "filters"],
        }}
        onGridReady={onGridReady}
        // enableRangeSelection={true}
        // suppressRowClickSelection={true}
        pagination={true}
        paginationAutoPageSize={true}
        groupSelectsChildren={true}
        onSelectionChanged={onSelectionChanged}
        enableFilter={true}
      ></AgGridReact>
    </div>
  );
};
