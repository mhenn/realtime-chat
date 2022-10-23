import create from 'zustand'

interface ChatState {
  email:string
  pw: string
  username:string
  fullname:string
  showRegistration:boolean
  count: number
  increase: () => void
  setEmail: (to: string) => void
  setPw: (to: string) => void
  setUsername: (to: string) => void
  setFullname: (to: string) => void
  setShowRegistration: (to: boolean) => void
}

const useStore = create<ChatState>()((set) => ({
  email: '',
  pw: '',
  count: 0,
  username:'',
  fullname:'',
  showRegistration: false,
  increase:             () => set((state) => ({ count: state.count + 1 })),
  setEmail:             (to) => set(() => ({email: to})),
  setPw:                (to) => set(() => ({pw: to})),
  setUsername:          (to) => set(() => ({username: to})),
  setFullname:          (to) => set(() => ({fullname: to})),
  setShowRegistration:  (to) => set(() => ({showRegistration: to}))
}))

export default useStore
