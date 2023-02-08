import create from "zustand";
import {
  devtools
} from "zustand/middleware";


const useSocketStore = create((set) => ({
  socket: null,
  progress: 0,
  actions: {
    setSocket: (by) => {
      set((state) => ({
        socket: by
      }));
    },
    setProgress: (by) => {
      set((state) => ({
        progress: by
      }));
    },
  },
}));

export const useSocket = () => useSocketStore((state) => state.socket);
export const useSocketActions = () => useSocketStore((state) => state.actions);
export const useProgress = () => useSocketStore((state) => state.progress);

export default useSocketStore;