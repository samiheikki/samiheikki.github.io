import React from 'react'
import { SocialIcon } from 'react-social-icons'

const someProfiles = [
  'https://twitter.com/samisuoheikki',
  'https://github.com/samiheikki',
  'https://fi.linkedin.com/in/samisuoheikki',
]

const Intro = () => (
  <section className="intro">
    <h1>
      Hi, I'm Sami Suo-Heikki.
      <span className="light">
        {' '}
        I create the fastest websites and apps. I'm also a keen learner on
        design and love working with Kanban or Scrum.
      </span>
    </h1>
    <ul>
      <li>
        <a
          href="https://www.youtube.com/watch?v=VPtgm9Tgdzo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch me talk about Web Technologies
        </a>
      </li>
      <li>
        <a
          href="https://github.com/samiheikki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's what I work on
        </a>
      </li>
    </ul>
    <div className="some-icons">
      {someProfiles.map(profile => (
        <SocialIcon
          url={profile}
          style={{ height: 40, width: 40 }}
          key={profile}
        />
      ))}
    </div>
  </section>
)

export default Intro
