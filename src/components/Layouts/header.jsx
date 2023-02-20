import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const ICON = require("@/assets/imgs/icon_machine_learning2.png");

const Header = () => {
  const header = useRef(null);

  // 스크롤 시 해더 fixed
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= 100) {
      header.current?.classList.add("active");
    } else {
      header.current?.classList.remove("active");
    }
  });

  const onSelectMenu = (e) => {
    const event = e.target;
  };

  let navigate = useNavigate();

  return (
    <header className="main-header" ref={header}>
      <div className="header_title">
        <img className="icon" src={ICON} alt="" />
        {/* <h1>측위알고리즘 시험 검증 시스템</h1> */}
        <h1
          onClick={() => {
            navigate("/Home");
          }}
          className="main_logo"
        >
          위치인식 데이터 수집 및 모델 생성{" "}
        </h1>
      </div>

      {/* 메뉴가 active 인지 아닌지 보고 className을 다르게 설정해서 style적용 */}
      <nav className="nav-bar-container">
        <NavLink
          onClick={(e) => onSelectMenu(e)}
          to={"/Home"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>

        <NavLink
          onClick={(e) => onSelectMenu(e)}
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to={"/Management"}
        >
          측위자원관리
        </NavLink>
        <NavLink
          onClick={(e) => onSelectMenu(e)}
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to={"/Training"}
        >
          학습모델관리
        </NavLink>
        <NavLink
          onClick={(e) => onSelectMenu(e)}
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to={"/Dataset"}
        >
          수집 데이터셋
        </NavLink>
        <NavLink
          onClick={(e) => onSelectMenu(e)}
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to={"/Monitoring"}
        >
          수집모니터링
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
