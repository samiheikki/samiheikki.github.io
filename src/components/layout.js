import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import favicon from '../images/gatsby-icon.png'

import './layout.css'

const title = 'Sami Suo-Heikki'
const description =
  'Sami Suo-Heikki is a Finnish software developer creating web and mobile applications.'

const keywords =
  'Sami, Suo-Heikki, wed developer finland, javascript, mobile app, software consultant, software developer'

const Layout = ({ children }) => (
  <>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'theme-color', content: '#0C85AC' },
        { rel: 'shortcut icon', sizes: '32x32', href: favicon },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto:300,400',
        },
      ]}
      author={title}
    >
      <html lang="en" />
    </Helmet>
    <div className="container">{children}</div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
