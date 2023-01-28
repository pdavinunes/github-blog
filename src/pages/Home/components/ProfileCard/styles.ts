import styled from 'styled-components'

export const ProfileCard = styled.div`
  width: 100%;

  display: flex;
  padding: 2.5rem;
  margin-top: -7rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  > img {
    width: 8rem;
    height: 8rem;
    border-radius: 8px;
    margin: auto;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 2rem;

  > span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    margin-top: 0.5rem;
  }
`

export const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  > strong {
    font-size: 1.5rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    line-height: 130%;
  }

  > a {
    font-size: 0.75rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    display: flex;
    gap: 0.5rem;
  }
`

export const ProfileSocialInfo = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;

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
