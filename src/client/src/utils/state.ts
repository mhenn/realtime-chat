import create from 'zustand'

interface ChatState {
  email:string
  pw: string
  count: number
  increase: () => void
  setEmail: (to: string) => void
  setPw: (to: string) => void
}

const useStore = create<ChatState>()((set) => ({
  email: '',
  pw: '',
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  setEmail: (to) => set((state) => ({email: to})),
  setPw: (to) => set((state) => ({pw: to}))
}))

export default useStore
