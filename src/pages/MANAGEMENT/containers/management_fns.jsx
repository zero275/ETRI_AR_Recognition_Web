// import axios from "axios";

// let url = "http://192.168.219.204:8095";

// const preCheckFn = () => {
//   const preCheck = filterRowData.filter((item) => item.ppdirectory !== null);
//   console.log(preCheck, "복숭아");
//   setPreCheckData(preCheck);

//   if (checkedInput === true) {
//   } else {
//   }
// };

// // 전처리 완료데이터만 표시 체크박스 함수
// export const PreCompleteData = () => {
//   axios
//     .post(
//       `${url}/api/collect/get-pre-data`,
//       { CollectPreCheck: "" },
//       {
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//         },
//       }
//     )
//     .then(function (response) {
//       console.log("전처리 데이터만 나오라!!!!!!!!", response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   preCheckFn();
// };
