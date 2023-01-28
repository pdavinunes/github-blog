/* eslint-disable react/no-children-prop */
/* eslint-disable react/no-unescaped-entities */
import { useCallback, useContext, useEffect } from 'react'
import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'
import { Link, useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { BlogContext } from '../../contexts/BlogContext'
import { dateFnsImpl } from '../../utils/DateLib/DateFnsImpl'
import {
  HeaderPost,
  PostContainer,
  PostContent,
  PostDescriptionCard,
  PostInfo,
} from './styles'

export function Post() {
  const { issueNumber } = useParams()
  const { fetchPostById, currentPost } = useContext(BlogContext)

  const loadContent = useCallback(async () => {
    await fetchPostById(issueNumber || '')
  }, [fetchPostById, issueNumber])

  useEffect(() => {
    loadContent()
  }, [loadContent])

  return (
    <PostContainer>
      <PostDescriptionCard>
        <HeaderPost>
          <Link to="..">
            <FaChevronLeft /> voltar
          </Link>
          <a href={currentPost.url} target="_blank" rel="noreferrer">
            ver no github <FaExternalLinkAlt />
          </a>
        </HeaderPost>
        <strong>{currentPost.title}</strong>
        <PostInfo>
          <span>
            <FaGithub />
            {currentPost.author}
          </span>
          <span>
            <FaCalendarDay />
            {dateFnsImpl.formatDateDistance(currentPost.createdAt)}
          </span>
          <span>
            <FaComment />
            {currentPost.comments} comentários
          </span>
        </PostInfo>
      </PostDescriptionCard>
      <PostContent>
        <ReactMarkdown
          children={currentPost.content}
          remarkPlugins={[remarkGfm]}
        />
      </PostContent>
    </PostContainer>
  )
}
