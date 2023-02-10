import React from "react";
import logoimg from "../../../assets/imgs/icon_machine_learning2.png";
import { MyButton } from "@/components/MyButton";

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
      <div className="login_part">
        <div className="inner_login_all">
          <div className="inner_login">
            <img src={logoimg} alt="login-logo" />
            <div className="login_title">Login</div>
          </div>
          <div className="inner_input">
            <form>
              <input
                type="text"
                maxLength="15"
                placeholder="아이디를 입력해주세요"
              />
            </form>
            <form>
              <input
                type="password"
                maxLength="15"
                placeholder="패스워드를 입력해주세요"
              />
            </form>
          </div>
          <div className="login_Btn">
            <button title="로그인" className="my_Btn">
              로그인
            </button>
          </div>
          <div className="login_footer">
            © All Rights Reserved by 에이치포테크
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContainer;
