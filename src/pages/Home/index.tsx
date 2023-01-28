import { Posts } from './components/Posts'
import { Profile } from './components/ProfileCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <Posts />
    </HomeContainer>
  )
}
