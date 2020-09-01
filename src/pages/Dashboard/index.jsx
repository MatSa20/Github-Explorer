import React, { useState } from 'react'
import { Title, Form, Repositories } from './styeles'
import api from '../../services/api'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'


export default function Dashboard() {
  const [newRepo, setNewRepo] = useState('')

  const [repositories, setRepositories] = useState([])

  async function handleAddRepository(event) {
    // Adicionar um repositorio
    event.preventDefault()

    const response = await api.get(`repos/${newRepo}`)

    const repository = response.data

    setRepositories([...repositories, repository])
    setNewRepo('')
  }

  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositorios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

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