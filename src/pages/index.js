import React from 'react'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Dicas from '../components/Dicas'
import Seguros from '../components/Seguros'
import Inseguros from '../components/Inseguros'
import Whatsapp from '../components/Whatsapp'


const IndexPage = () => {

  return (
    <Layout>
      <Main />
      <Dicas />
      <Seguros /> 
      <Inseguros /> 
      <Whatsapp/>
    </Layout>
  )
}

export default IndexPage