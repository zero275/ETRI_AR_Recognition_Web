import Table from "@/components/table";
import React from "react";

const ManagementCardView = ({ title, btnList, tableData, idx }) => {
  return (
    <div className={`card ani${idx}`}>
      <p className="card__title">{title}</p>
      <Table tableData={tableData} />
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

export default ManagementCardView;
