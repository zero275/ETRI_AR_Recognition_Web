import axios, {
  AxiosError
} from "axios";

// axios 기본 설정
export const api = axios.create({
  // baseURL: "http://112.145.7.170:48093",
  baseURL: "http://192.168.219.204:8093",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

// get 데이터세트 api
/**
 *
 * @returns
 */
export const getDatasetList = async () => {
  return await api
    .get(`/api/action/get-dataset-list`, {
      params: {
        group: "group",
      },
    })
    .then((res) => res.data);
};

// get 데이터세트 info api
export const getDatasetListInfo = async (payload) => {
  return await api
    .get(`/api/action/get-dataset-info`, {
      params: {
        ...payload,
      },
    })
    .then((res) => res.data);
};

// get actor api
export const getActorList = async (payload) => {
  return await api
    .get(`/api/action/get-actor-list`, {
      params: {
        ...payload,
      },
    })
    .then((res) => res.data);
};

// get action api
export const getActorActionList = async (payload) => {
  return await api
    .get(`/api/action/get-actor-action-list`, {
      params: {
        ...payload,
      },
    })
    .then((res) => res.data);
};

// get take api
export const getActorActionTakeList = async (
  payload
) => {
  return await api
    .get(`/api/action/get-actor-action-take-list`, {
      params: {
        ...payload,
      },
    })
    .then((res) => res.data);
};

// get take api
export const getGroupList = async () => {
  return await api
    .get(`/api/action/get-group-list`)
    .then((res) => res.data);
};

// get take api
export const getTakeFileContents = async (payload) => {
  return await api
    .get(`/api/action/get-take-file-content`, {
      params: {
        ...payload,
      },
    })
    .then((res) => res.data);
};