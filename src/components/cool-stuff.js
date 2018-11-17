import React from 'react'

const speaks = [
  {
    title: 'Web Components today',
    url: 'https://www.youtube.com/watch?v=VPtgm9Tgdzo',
  },
  {
    title: 'Creating the fastest website in the world',
    url: 'https://www.youtube.com/watch?v=-kM0x7T0ib4',
  },
  {
    title: 'Creating a Progressive Web App (PWA) with Angular',
    url: 'https://www.youtube.com/watch?v=XUP0TxX53As',
  },
  {
    title: 'Angular introduction',
    url: 'https://www.youtube.com/watch?v=jwqDCjK76q8&t=1s',
  },
  {
    title: 'Polymer framework',
    url:
      'https://www.slideshare.net/SamiSuoHeikki/how-to-build-a-web-application-with-polymer',
  },
]
const projects = [
  {
    title: 'JavaScript Guessing Game',
    url: 'https://javascript-game.firebaseapp.com/',
  },
  {
    title: 'Vaadin Components',
    url: 'https://vaadin.com/elements',
  },
  {
    title: 'Finnkino Movie App',
    url: 'https://finnkino-app.firebaseapp.com/',
  },
  {
    title: 'Combo Box Selector for Pokémons',
    url: 'https://github.com/samiheikki/pokemon-selector',
  },
]
const awards = [
  {
    title: 'Winner of Startup Journey',
    url:
      'https://www.ts.fi/uutiset/talous/807733/Lukihairiotesti+ja+perhosia+tukeva+konsepti+voittivat+Start+up+journeyn',
  },
  {
    title: 'Winner of Pitch Captain',
    url:
      'http://www.y-lehti.fi/uutiset/nayta/11904/Identio+voitti+Ship+Startup+Festivalin',
  },
  {
    title: 'Winner of ICT Showroom',
    url:
      'http://www.turkuamk.fi/fi/artikkelit/587/pikatesti-lukivaikeuksien-tunnistamiseen-nappasi-voiton-ict-showroomissa/',
  },
  {
    title: 'Winner of ViLLE Edugame Hackathon',
    url: 'http://villeteam.fi/',
  },
  {
    title: 'Honorable mention for Excellence',
    url:
      'http://www.turkuamk.fi/fi/ajankohtaista/764/turun-amk-avasi-lukuvuotensa/',
  },
]

const CoolStuff = () => (
  <section className="cool-stuff">
    <h4>Cool stuff</h4>
    <div className="left-col">
      <span className="light">Speaks</span>
    </div>
    <div className="right-col">
      {speaks.map(speak => (
        <h3 key={speak.url}>
          <a href={speak.url} target="_blank" rel="noopener noreferrer">
            {speak.title}
          </a>
        </h3>
      ))}
    </div>
    <div className="left-col hide-mobile" />
    <div className="right-col hide-mobile">
      <div className="border-liner" />
    </div>
    <div className="left-col">
      <span className="light">Projects</span>
    </div>
    <div className="right-col">
      {projects.map(project => (
        <h3 key={project.url}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
      ))}
    </div>
    <div className="left-col hide-mobile" />
    <div className="right-col hide-mobile">
      <div className="border-liner" />
    </div>
    <div className="left-col">
      <span className="light">Awards</span>
    </div>
    <div className="right-col">
      {awards.map(award => (
        <h3 key={award.url}>
          <a href={award.url} target="_blank" rel="noopener noreferrer">
            {award.title}
          </a>
        </h3>
      ))}
    </div>
  </section>
)

export default CoolStuff
