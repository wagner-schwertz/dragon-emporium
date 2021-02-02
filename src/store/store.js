import createStore from "zustand";

//initialize theme
const current_theme = localStorage.getItem("theme");
if (!["violet", "navy"].includes(current_theme)) {
  localStorage.setItem("theme", "navy");
}
//retrieve token
const token = localStorage.getItem("token");

const useStore = createStore((set, get) => ({
  token: token,
  theme: localStorage.getItem("theme"),
  toast: { message: null, type: "success" },
  dragons: [],
  sortedDragons: () =>
    get().dragons.sort((a, b) => a.name.localeCompare(b.name)),

  setToastMessage: (message, type) => {
    set({ toast: { message: null, type: type } });
    set({ toast: { message: message, type: type } });
    setTimeout(() => {
      set({ toast: { message: null, type: "success" } });
    }, 2000);
  },

  toggleTheme: () => {
    set((state) =>
      state.theme === "violet"
        ? { ...state, theme: "navy" }
        : { ...state, theme: "violet" }
    );
    localStorage.setItem("theme", get().theme);
  },

  fillDragons: (data) => {
    set({ dragons: data });
  },

  addSingleDragon: (data) => {
    set((state) => ({ dragons: [...state.dragons, data] }));
  },

  login: (token) => {
    set({ token: token });
    localStorage.setItem("token", token);
  },

  logout: () => {
    set({ token: null });
    localStorage.removeItem("token");
  },
}));

export { useStore };
