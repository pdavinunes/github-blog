import { useContext } from 'react'
import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { BlogContext } from '../../../../contexts/BlogContext'

import {
  ProfileCard,
  ProfileHeader,
  ProfileInfo,
  ProfileSocialInfo,
} from './styles'

export function Profile() {
  const { user } = useContext(BlogContext)

  return (
    <ProfileCard>
      <img src="https://avatars.githubusercontent.com/u/33943794?v=4" alt="" />
      <ProfileInfo>
        <ProfileHeader>
          <strong>{user.name}</strong>
          <a href={user.githubAccountLink} target="_blank" rel="noreferrer">
            Github <FaExternalLinkAlt />
          </a>
        </ProfileHeader>
        <span>{user.summary}</span>
        <ProfileSocialInfo>
          <span>
            <FaGithub />
            {user.githubUsername}
          </span>
          <span>
            <FaBuilding />
            {user.company}
          </span>
          <span>
            <FaUserFriends />
            {user.followers} Seguidores
          </span>
        </ProfileSocialInfo>
      </ProfileInfo>
    </ProfileCard>
  )
}
