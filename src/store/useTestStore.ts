import { create } from 'zustand';
import { Answer } from '../utils/scoring';

interface TestState {
    answers: Answer[];
    addAnswer: (answer: Answer) => void;
    removeLastAnswer: () => void;
    reset: () => void;
}

export const useTestStore = create<TestState>((set) => ({
    answers: [],
    addAnswer: (answer) => set((state) => ({ answers: [...state.answers, answer] })),
    removeLastAnswer: () => set((state) => ({ answers: state.answers.slice(0, -1) })),
    reset: () => set({ answers: [] }),
}));
