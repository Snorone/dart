import { create } from "zustand";

interface CounterState {
  counts: Record<number, number>;
  increment: (num: number) => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  counts: {},

  increment: (num) =>
    set((state) => ({
      counts: {
        ...state.counts,
        [num]: (state.counts[num] || 0) + 1,
      },
    })),
}));
