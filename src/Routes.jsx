import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { path } from './constants/path'
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import RegisterLayout from './layouts/RegisterLayouts/RegisterLayouts'

export default function Routes() {
  return (
    <Switch>
      <Route path={path.home} exact>
        <Home />
      </Route>
      <Route path={path.login} exact>
        <RegisterLayout title="Đăng nhập">
          <Login />
        </RegisterLayout>
      </Route>
      <Route path={path.register} exact>
        <RegisterLayout title="Đăng kí">
          <Register />
        </RegisterLayout>
      </Route>
      <Route path={path.notFound} exact>
        <NotFound />
      </Route>
    </Switch>
  )
}
