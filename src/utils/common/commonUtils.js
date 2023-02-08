import { COLOR } from "../../constants/constant";

/**
 * 빈 객체 여부 체크
 * @author 곽태욱
 */
export const isEmpty = (obj) => {
  return !obj || Object.keys(obj).length === 0;
};

/**
 * 객체의 keys 추출
 * @author 곽태욱
 */
export const getKeysInObject = (obj) => {
  return Object.keys(obj);
};

/**
 * 오름차순 sort
 * @author 곽태욱
 */
export const sortAscendingBy = (filed) => {
  return function compare(a, b) {
    if (a[filed] < b[filed]) {
      return -1;
    }
    if (a[filed] > b[filed]) {
      return 1;
    }
    return 0;
  };
};

/**
 * 내림차순 sort
 * @author 곽태욱
 */
export const sortDescendingBy = (filed) => {
  return function compare(a, b) {
    if (a[filed] < b[filed]) {
      return 1;
    }
    if (a[filed] > b[filed]) {
      return -1;
    }
    return 0;
  };
};

/**
 * tr 클릭 시 색 변경
 * @param e
 * @param index
 * @param ref
 * @author 곽태욱
 */
export const clickTrChangeColor = (e, index, ref) => {
  const currentRef = ref.current[index];
  const allRef = ref.current;
  allRef.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });

  currentRef.style.backgroundColor = COLOR.GREEN_PR;
};

export const initTrColor = (ref) => {
  const allRef = ref.current;
  allRef.forEach((element) => {
    element.style.backgroundColor = "transparent";
  });
};

export const isTwoObjectsTheSame = (first, second) => {
  let first_sort = Object.keys(first)
    .sort()
    .reduce((obj, key) => ((obj[key] = first[key]), obj), {});
  let second_sort = Object.keys(second)
    .sort()
    .reduce((obj, key) => ((obj[key] = second[key]), obj), {});

  return JSON.stringify(first_sort) === JSON.stringify(second_sort);
};

export const videoToUrl = (e) => {
  const urls = [];
  let numberOfVideos = e?.target?.files?.length;
  if (e?.target?.files?.length && numberOfVideos) {
    for (var i = 0; i < numberOfVideos; i++) {
      var file = e?.target?.files[i];
      var blobURL = URL.createObjectURL(file);
      var video = document.createElement("video");
      video.src = blobURL;
      urls.push(blobURL);
    }
  }
  return urls;
};
