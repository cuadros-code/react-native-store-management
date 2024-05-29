import { create } from 'zustand'

export type CounterState = {
  counter: number,
  incrementBy: (value: number) => void
}

export const useCounterStore = create<CounterState>()((set, get) => ({
  counter: 0,
  incrementBy(value) {
    set({
      counter: get().counter + value
    })
  },
}))