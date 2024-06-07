import { create } from "zustand";

export const usePortfolioStore = create((set) => ({
  selectedProject: 0,
  updateProject: (newProject) => set({ selectedProject: newProject }),
}));
