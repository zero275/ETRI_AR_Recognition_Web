import React from "react";

const DashboardContainer = () => {
  return (
    <main className="main_dashboard">
      <div className="dashboard">
        {" "}
        {/* <p className="title">
                측위자원
                <br />
                수집/학습 관리
                <br />
                프로그램
              </p> */}
        <p className="title">
          위치인식 <br />
          데이터 수집 및 <br />
          모델 생성{" "}
        </p>
        <ul className="subtitle">
          <li> 측위알고리즘을 검증하기 위하여 수집된 측위자원을 관리 </li>{" "}
          <li> 측위자원으로 학습 데이터세트를 생성하고 학습 수행 </li>{" "}
          <li> 학습된 모델을 관리 </li> <li> 측위자원 수집 상황을 모니터링 </li>{" "}
        </ul>{" "}
      </div>{" "}
    </main>
  );
};

export default DashboardContainer;
