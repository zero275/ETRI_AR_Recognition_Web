import Table from "@/components/table";
import { getKeysInObject } from "@/utils/common/commonUtils";

import React from "react";

const TrainingCardView = ({
  title,
  btnList,
  tableData,
  tableId,
  checkedIdx,
}) => {
  return (
    <div className="card flex8">
      {/* 제목 */}
      <p className="card__title">{title}</p>
      {/* 테이블 */}
      <Table tableData={tableData} tableId={tableId} />
      {/* 버튼 */}
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
