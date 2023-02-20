import React, { useState } from "react";
import logoimg from "../../../assets/imgs/icon_machine_learning2.png";
import { MyButton } from "@/components/MyButton";

const DashboardContainer = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userNameValue, setUserNameValue] = useState();
  const [loginHandle, setLoginHandle] = useState("");

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "잘못된 아이디입니다",
    pass: "잘못된 비밀번호입니다",
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];
    // Find user login info
    const userData = database.find(
      (user) => user.username === localStorage.getItem("userId")
    );

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        setLoginHandle("login_bye");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderForm = (
    <div className={"login_part " + loginHandle}>
      <div className="inner_login_all">
        <div className="inner_login">
          <img src={logoimg} alt="login-logo" />
          <div className="login_title">Login</div>
        </div>
        <div className="inner_input">
          <form onSubmit={handleSubmit} className={" " + loginHandle}>
            <div>
              <input
                type="text"
                maxLength="15"
                name="uname"
                placeholder="아이디를 입력해주세요"
                required
                onChange={(e) => {
                  const userName = e.target.value;
                  setUserNameValue(userName);
                }}
              />
              {renderErrorMessage("uname")}
            </div>
            <div>
              <input
                type="password"
                maxLength="15"
                name="pass"
                placeholder="패스워드를 입력해주세요"
              />
              {renderErrorMessage("pass")}
            </div>
            <div>
              <div className="login_Btn">
                <input
                  type="submit"
                  value="로그인"
                  className="my_Btn"
                  onClick={() => {
                    localStorage.setItem("userId", userNameValue);
                  }}
                ></input>
              </div>
              <div className="login_footer">
                © All Rights Reserved by 에이치포테크
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

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
        {localStorage.getItem("userId") !== null ? (
          <p className="loginName">
            접속 아이디 : {localStorage.getItem("userId")}
          </p>
        ) : null}
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
      {localStorage.getItem("userId") !== null ? (
        <div className="user_info">{`welcome ${localStorage.getItem(
          "userId"
        )}`}</div>
      ) : (
        renderForm
      )}
    </main>
  );
};

export default DashboardContainer;
