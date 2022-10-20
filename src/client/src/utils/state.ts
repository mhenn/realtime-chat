import create from 'zustand'

interface ChatState {
  user:string
  email:string
  count: number
  increase: () => void
  setName: (to: string) => void
  setMail: (to: string) => void
}

const useStore = create<ChatState>()((set) => ({
  user: '',
  email: '',
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  setName: (to) => set((state) => ({user: to})),
  setMail: (to) => set((state) => ({email: to}))
}))

export default useStore
