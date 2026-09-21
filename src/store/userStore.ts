import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore{
    username: string,
    email: string,
    setusername: (username: string) => void,
    setemail: (email: string) => void
}

export const useStore = create(
    devtools<UserStore>((set) => ({
    username: "",
    email: "",
    setusername: (username) => set(() => ({username})),
    setemail: (email) => set(() => ({email}))
    }))
)

interface Post{
    id: string,
    title: string,
    content: string
}

interface PostStore{
    posts: Post[],
    setPost: (posts: Post[]) => void
    addPost: (post: Post) => void
}

export const usePosts = create(
    devtools<PostStore>((set) => ({
        posts: [],
        setPost: (posts: Post[]) => set(() => ({posts})),
        addPost: (post: Post) => set((state) => ({posts: [...state.posts, post]}))
    }), {
        name:"Posts",
        store: "Posts"
    }
))