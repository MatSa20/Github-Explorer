import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function Repository() {

  const { params } = useRouteMatch()

  return (
    <h1>Repository: {params.repository}</h1>
  )
}