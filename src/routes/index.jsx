import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Repository from '../pages/Repository'

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard}>
      </Route>
      {/* O + indica que tudo que tem depois da barra é um parametro */}
      <Route path='/repository/:repository+' component={Repository} />
    </Switch>
  )
} 