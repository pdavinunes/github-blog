import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`

export const PostSummary = styled(Link)`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  text-decoration: none;
  border: 2px solid transparent;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    strong {
      width: 70%;
      font-size: 1.25rem;
      font-weight: 700;
      font-family: 'Nunito', sans-serif;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      line-height: 22.4px;
      color: ${(props) => props.theme['base-span']};
    }
  }
  p {
    margin: auto;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 25.6px;
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`
