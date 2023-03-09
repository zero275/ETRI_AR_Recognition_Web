import create from "zustand";


const useJsonStore = create((set) => ({
  json: {},
  actions: {
    setJson: (by) => {
      set((state) => ({
        json: {
          ...by
        }
      }));
    },
  },
}));

export const useJson = () => useJsonStore((state) => state.json);
export const useJsonActions = () => useJsonStore((state) => state.actions);

export default useJsonStore;