import create from 'zustand'

interface ChatState {
  user:string
  count: number
  increase: () => void
  setName: (to: string) => void
}

const useStore = create<ChatState>()((set) => ({
  user: "Test",
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  setName: (to) => set((state) => ({user: to}))
}))

export default useStore
