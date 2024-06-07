import { create } from "zustand";

export const usePortfolioStore = create((set) => ({
  selectedProject: null,
  previouslySelected: null,
  setSelectedProject: (newProject) => set({ selectedProject: newProject }),
  setPreviouslySelected: (newProject) =>
    set({ previouslySelected: newProject }),
}));
