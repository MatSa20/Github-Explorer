/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'


export default function Repository() {

  const [repository, setRepository] = useState(null)
  const [issues, setIssues] = useState([])

  const { params } = useRouteMatch()

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data)
    })

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssues(response.data)
    })
  }, [params.repository])

  return (
    <>
      <Header>
        <img src={logoImg} alr='Github Explorer' />
        <Link to='/'>
          <FiChevronLeft size={16} />
        Voltar
      </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>

            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  )
}