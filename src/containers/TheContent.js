import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import routes from './routes'

export default function TheContent() {
  return (
    <div style={{ margin: '60px 10px 10px 10px' }}>
      <Suspense>
        <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            )
          })}
          <Redirect from="/" to="/post" />
        </Switch>
      </Suspense>
    </div>
  )
}
