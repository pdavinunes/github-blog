/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { dateFnsImpl } from '../../../../utils/DateLib/DateFnsImpl'
import { PostSummary, PostsList } from './styles'

export function Posts() {
  const { posts } = useContext(BlogContext)

  return (
    <PostsList>
      {posts.map((post) => {
        return (
          <PostSummary key={post.number} to={`post/${post.number}`}>
            <div>
              <strong>{post.title}</strong>
              <span>{dateFnsImpl.formatDateDistance(post.createdAt)}</span>
            </div>
            <p>{post.content}</p>
          </PostSummary>
        )
      })}
    </PostsList>
  )
}
