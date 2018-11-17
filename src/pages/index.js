import React from 'react'

import Layout from '../components/layout'
import Intro from '../components/intro'
import Experience from '../components/experience'
import CoolStuff from '../components/cool-stuff'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <Intro />
    <Experience />
    <CoolStuff />
    <Footer />
  </Layout>
)

export default IndexPage
