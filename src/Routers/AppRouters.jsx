import React from 'react'
import { Route } from 'wouter'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Navbar } from '../components/Navbar'

export const AppRouters = () => {
  return (
    <>
      <Navbar />
      <Route path= "/contact" component={Contact} />
      <Route path="/" component={Home} />
      <Route path="/search/:input" component={Home} />

    </>
  )
}
