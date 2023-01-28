import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  summary: string
  followers: number
  company: string
  githubUsername: string
  githubAccountLink: string
  avatarUrl: string
}

interface Post {
  number: number
  title: string
  author: string
  content: string
  comments: number
  createdAt: Date
  url: string
}

interface PostItem {
  number: number
  title: string
  content: string
  createdAt: Date
}

interface BlogContextType {
  user: User
  currentPost: Post
  posts: PostItem[]
  fetchPosts: (query?: string) => Promise<void>
  fetchPostById: (id: string) => Promise<void>
}

interface BlogProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProviderProps) {
  const [user, setUser] = useState({} as User)
  const [posts, setPosts] = useState([] as PostItem[])
  const [currentPost, setCurrentPost] = useState({
    number: 0,
    title: '',
    author: '',
    content: '',
    comments: 0,
    createdAt: new Date(),
    url: '',
  } as Post)

  async function fetchPosts(query = '') {
    const { data } = await api.get('/search/issues', {
      params: { q: `${query} repo:pdavinunes/github-blog` },
    })
    const mappedPosts = data.items.map((item: any) => {
      return {
        number: item.number,
        title: item.title,
        content: item.body,
        createdAt: new Date(item.updated_at),
      } as PostItem
    }) as PostItem[]

    setPosts(mappedPosts)
  }

  async function fetchUser() {
    const { data } = await api.get('/users/pdavinunes')
    console.log(data)
    setUser({
      name: data.name,
      summary: data.bio,
      company: data.company,
      githubUsername: data.login,
      followers: data.followers,
      avatarUrl: data.avatar_url,
      githubAccountLink: data.html_url,
    })
  }

  async function fetchPostById(id: string) {
    const { data } = await api.get(`/repos/pdavinunes/github-blog/issues/${id}`)
    const post = Object.assign(
      {
        number: data.number,
        title: data.title,
        author: data.user.login,
        content: data.body,
        comments: data.comments,
        createdAt: new Date(data.updated_at),
        url: data.html_url,
      },
      {},
    ) as Post

    setCurrentPost(post)
  }

  useEffect(() => {
    fetchPosts()
    fetchUser()
  }, [])

  return (
    <BlogContext.Provider
      value={{
        user,
        posts,
        currentPost,
        fetchPosts,
        fetchPostById,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
