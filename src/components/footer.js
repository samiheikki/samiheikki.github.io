import React from 'react'
import face from '../images/face.jpg'

const Footer = () => (
  <section className="footer">
    <p>
      You can follow me on{' '}
      <a
        href="https://twitter.com/samisuoheikki"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      ,{' '}
      <a
        href="https://github.com/samiheikki"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      ,{' '}
      <a
        href="https://fi.linkedin.com/in/samisuoheikki"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </a>{' '}
      or <a href="mailto:suoheikki.sami@gmail.com">email me</a>.
    </p>
    <div className="face">
      <img src={face} alt="Sami Suo-Heikki" />
    </div>
  </section>
)

export default Footer
