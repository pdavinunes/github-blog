import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  const { posts, fetchPosts } = useContext(BlogContext)

  async function handleSubmitSearchForm(data: SearchFormInputs) {
    await fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitSearchForm)}>
      <div>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </div>
      <input {...register('query')} type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
