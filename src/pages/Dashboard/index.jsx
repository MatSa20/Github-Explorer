import React, { useState, useEffect } from 'react'
import { Title, Form, Error, Repositories } from './styeles'
import api from '../../services/api'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'


export default function Dashboard() {
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setinputError] = useState('')
  const [repositories, setRepositories] = useState(() => {
    const storageRepositories = localStorage.getItem('@GithubExplorer: repositories')

    if (storageRepositories) {
      return JSON.parse(storageRepositories)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem('@GithubExplorer: repositories', JSON.stringify(repositories))
  }, [repositories])

  async function handleAddRepository(event) {
    // Adicionar um repositorio
    event.preventDefault()

    if (!newRepo) {
      setinputError('Digite o autor/nome do repositório!')
      return
    }

    try {
      const response = await api.get(`repos/${newRepo}`)

      const repository = response.data

      setRepositories([...repositories, repository])
      setNewRepo('')
      setinputError('')
    } catch {
      setinputError('Repositório não encontrado!')
    }

  }

  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositorios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href='teste'>
            <img src={repository.owner.avatar_url}
              alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}