import create from "zustand";
const useTakeFilesStore = create((set) => ({
  takeFiles: {},
  actions: {
    setTakeFiles: (by) => {
      console.log(by);

      set((state) => ({
        takeFiles: {
          ...by
        }
      }));
    },
  },
}));

export const useTakeFiles = () => useTakeFilesStore((state) => state.takeFiles);
export const useTakeFilesActions = () =>
  useTakeFilesStore((state) => state.actions);

export default useTakeFilesStore;