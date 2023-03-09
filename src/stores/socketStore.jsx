import create from "zustand";
import { devtools } from "zustand/middleware";

const useSocketStore = create((set) => ({
  socket: null,
  progress: 0,
  fetchData: {
    isProgressing: false,
    isDone: false,
    isStop: false,
    isError: true,
    error: "",
    group: "",
    dataset_name: "",
    progress: 0,
  },
  actions: {
    setSocket: (socket) => set({ socket }),
    setProgress: (progress) => set({ progress }),
    setFetchData: (fetchData) =>
      set((state) => ({ fetchData: { ...state.fetchData, ...fetchData } })),
  },
}));

export const useSocket = () => useSocketStore((state) => state.socket);
export const useSocketActions = () => useSocketStore((state) => state.actions);
export const useProgress = () => useSocketStore((state) => state.progress);
export const useFetchData = () => useSocketStore((state) => state.fetchData);

export default useSocketStore;
