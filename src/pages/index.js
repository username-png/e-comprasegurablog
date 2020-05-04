import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import Main from '../components/Main'
import Dicas from '../components/Dicas'


const IndexPage = () => {

  return (
    <Layout>
      <Main />
      <Dicas />
    </Layout>
  )
}

export default IndexPage