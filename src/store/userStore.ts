import { create } from "zustand";

interface UserStore{
    username: string,
    email: string,
    setusername: (username: string) => void,
    setemail: (email: string) => void
}

export const useStore = create<UserStore>((set) => ({
    username: "",
    email: "",
    setusername: (username) => set(() => ({username})),
    setemail: (email) => set(() => ({email}))
}))