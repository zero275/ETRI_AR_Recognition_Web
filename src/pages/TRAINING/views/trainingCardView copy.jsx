import React from "react";
import { useTable, Column } from "react-table";
import DataTable, { TableColumn } from "react-data-table-component";

const TrainingCardView = ({ title, btnList, tableData }) => {
  // const data = React.useMemo(
  //   () => [
  //     {
  //       Idx: 1,
  //       ScenarioName: "NASDAQ",
  //       SiteId: "Brazil",
  //       BuildingId: "8671 Susan Terrace",
  //       Floor: "7.5.7",
  //       Route_wp: "uk.co.ebay.Konklab",
  //       Date: "2021-07-21",
  //     },
  //     {
  //       Idx: 2,
  //       ScenarioName: "NYSE",
  //       SiteId: "Bulgaria",
  //       BuildingId: "2568 Corben Road",
  //       Floor: "7.7",
  //       Route_wp: "com.hexun.Otcom",
  //       Date: "2021-10-11",
  //     },
  //   ],
  //   []
  // );

  // const columns = React.useMemo<Column<TableDataInterface>[]>(
  //   () => [
  //     {
  //       Header: "Idx",
  //       accessor: "Idx",
  //     },
  //     {
  //       Header: "Scenario Name",
  //       accessor: "ScenarioName",
  //     },
  //     {
  //       Header: "Site Id",
  //       accessor: "SiteId",
  //     },
  //     {
  //       Header: "Building Id",
  //       accessor: "BuildingId",
  //     },
  //     {
  //       Header: "Floor",
  //       accessor: "Floor",
  //     },
  //     {
  //       Header: "Route wp",
  //       accessor: "Route_wp",
  //     },
  //     {
  //       Header: "Date",
  //       accessor: "Date",
  //     },
  //   ],
  //   []
  // );

  // const tableInstance = useTable({
  //   // @ts-ignore
  //   columns,
  //   data,
  // });

  // console.log(tableInstance);

  const columns = [
    {
      name: "Idx",
      selector: "Idx",
      sortable: true,
    },
    {
      name: "ScenarioName",
      selector: "ScenarioName",
      sortable: true,
    },
    {
      name: "SiteId",
      selector: "SiteId",
      sortable: true,
    },
    {
      name: "BuildingId",
      selector: "BuildingId",
      sortable: true,
    },
    {
      name: "Floor",
      selector: "Floor",
      sortable: true,
    },
    {
      name: "Route_wp",
      selector: "Route_wp",
      sortable: true,
    },
    {
      name: "Date",
      selector: "Date",
      sortable: true,
    },
  ];

  return (
    <div className="card flex8">
      <p className="card__title">{title}</p>
      <div className="card__table">
        {/* <DataTable
          title="Employess"
          columns={columns}
          data={tableData}
          defaultSortField="name"
          pagination
          selectableRows
        /> */}
      </div>
      <div className="card__table__btn-container">
        {btnList.map((list) => {
          return (
            <button key={list} className="card__table__btn">
              {list}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingCardView;
