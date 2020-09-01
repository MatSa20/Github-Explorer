import React from 'react'
import { Title, Form, Repositories } from './styeles'
import { FiChevronRight } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

export default function Dashboard() {
  return (
    <>
      <img src={logoImg} alt='Github Explorer' />
      <Title>Explore repositorios no Github</Title>

      <Form action=''>
        <input placeholder='Digite o nome do repositório' />
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='teste'>
          <img src='https://avatars3.githubusercontent.com/u/38141771?s=460&u=671cdfd5dd82b545234d3ffeadf638bd286ddf9e&v=4'
            alt='Matheus Sá' />

          <div>
            <strong>MatSa20/Eagle-React-Project</strong>
            <p>Meu primeiro projeto em React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img src='https://avatars3.githubusercontent.com/u/38141771?s=460&u=671cdfd5dd82b545234d3ffeadf638bd286ddf9e&v=4'
            alt='Matheus Sá' />

          <div>
            <strong>MatSa20/Eagle-React-Project</strong>
            <p>Meu primeiro projeto em React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='teste'>
          <img src='https://avatars3.githubusercontent.com/u/38141771?s=460&u=671cdfd5dd82b545234d3ffeadf638bd286ddf9e&v=4'
            alt='Matheus Sá' />

          <div>
            <strong>MatSa20/Eagle-React-Project</strong>
            <p>Meu primeiro projeto em React.JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>

      </Repositories>
    </>
  )
}