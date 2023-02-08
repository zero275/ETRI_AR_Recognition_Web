import { COLOR } from "@/constants/constant";
import {
  clickTrChangeColor,
  getKeysInObject,
  initTrColor,
  sortAscendingBy,
  sortDescendingBy,
} from "@/utils/common/commonUtils";
import React, { MutableRefObject, useEffect, useRef } from "react";
import { useState } from "react";

const Table = ({ tableData, tableId, rowClickedData }) => {
  const [data, setData] = useState(tableData);
  const [checkedData, setCheckedData] = useState(new Set());
  const tableColumn = getKeysInObject(tableData[0]);
  const trRef = useRef();

  const getAllIdxToSet = () => {
    return data.map((list) => list.Idx);
  };

  // Sort 기능
  const onSort = (list, event) => {
    const target = event.target;
    const dataset = target.dataset;

    let newTableData = [{}];

    if (dataset.ariaSort === "acsending") {
      dataset.ariaSort = "decsending";
      newTableData = data.sort(sortAscendingBy(list));
    } else if (dataset.ariaSort === "decsending") {
      dataset.ariaSort = "acsending";
      newTableData = data.sort(sortDescendingBy(list));
    }

    initTrColor(trRef);
    setData([...newTableData]);
  };

  // 전체선택
  const onCheckBoxAll = (e) => {
    const target = e.target;
    const checked = target.checked;
    const idxs = getAllIdxToSet();

    checkedData.clear();

    if (checked) {
      idxs.forEach((item) => {
        checkedData.add(item);
      });
    } else if (!checked) {
      checkedData.clear();
    }
    setCheckedData(new Set(checkedData));
  };

  // 개별선택
  const onCheckBox = (e, _idx) => {
    const target = e.target;

    const checked = target.checked;
    if (checked) {
      checkedData.add(_idx);
      setCheckedData(new Set(checkedData)); // new Set 을 안붙이면 state 업데이트 안됨
    } else if (!checked && checkedData.has(_idx)) {
      checkedData.delete(_idx);
      setCheckedData(new Set(checkedData));
    }
  };

  // table row 클릭
  const onClickTR = (e, index) => {
    // 클릭 하는 요소가 checkbox 일때는 무시
    if (e.target.type !== "checkbox") {
      clickTrChangeColor(e, index, trRef);
    }
  };

  return (
    <div className="card__table">
      <table id={tableId}>
        <thead>
          <tr>
            <th className="fixed-header">
              <div className="flex-row-center">
                <input
                  id="checkbox-all"
                  type="checkbox"
                  className="card__table__checkbox"
                  onChange={onCheckBoxAll}
                />
                <label htmlFor="checkbox-all"></label>
              </div>
            </th>
            {tableColumn.map((list) => {
              return (
                <th
                  data-aria-sort="acsending"
                  onClick={(e) => onSort(list, e)}
                  className="fixed-header clickable"
                >
                  {list}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((list, index) => {
            return (
              <tr
                className="card__table__tr clickable"
                ref={(ref) => {
                  return (trRef.current[index] = ref);
                }}
                onClick={(e) => onClickTR(e, index)}
              >
                <td className="align-center">
                  <input
                    onChange={(e) => onCheckBox(e, list.Idx)}
                    checked={checkedData.has(list.Idx)}
                    type="checkbox"
                    className="card__table__checkbox"
                  />
                </td>
                {tableColumn.map((column) => {
                  return <td>{list[column]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
