import { create } from 'zustand';
import { Answer } from '../utils/scoring';

interface TestState {
    answers: Answer[];
    addAnswer: (answer: Answer) => void;
    reset: () => void;
}

export const useTestStore = create<TestState>((set) => ({
    answers: [],
    addAnswer: (answer) => set((state) => ({ answers: [...state.answers, answer] })),
    reset: () => set({ answers: [] }),
}));
