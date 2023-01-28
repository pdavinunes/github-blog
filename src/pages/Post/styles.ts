import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 10rem auto;
  width: 54rem;
`

export const PostDescriptionCard = styled.div`
  width: 100%;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  margin-top: -5rem;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  height: 168px;

  strong {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;
  }
`

export const PostInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  > span {
    display: flex;
    align-items: center;
    gap: 0.53rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const HeaderPost = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.125rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
  }

  svg {
    color: ${(props) => props.theme.blue};
  }
`

export const PostContent = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 40px 32px;

  img {
    max-width: 100%;
  }

  a {
    color: ${(props) => props.theme.blue};
  }

  code {
    display: flex;
    width: 100%;
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};
  }
`
