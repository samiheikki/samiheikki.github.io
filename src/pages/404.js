import React from 'react'

import Layout from '../components/layout'
import Intro from '../components/intro'
import Experience from '../components/experience'
import CoolStuff from '../components/cool-stuff'
import Footer from '../components/footer'

const NotFoundPage = () => (
  <Layout>
    <Intro />
    <Experience />
    <CoolStuff />
    <Footer />
  </Layout>
)

export default NotFoundPage

// import React from 'react'
// import Layout from '../components/layout'

// const NotFoundPage = () => (
//   <Layout>
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )

// export default NotFoundPage
