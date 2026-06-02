import { create } from 'zustand';

interface NarrativeState {
  progress: number;
  setProgress: (progress: number) => void;
}

export const useNarrativeStore = create<NarrativeState>((set) => ({
  progress: 0,
  setProgress: (progress) => set({ progress }),
}));
