import React, { Fragment } from 'react'

const jobs = [
  {
    time: 'Jun 2015 to Present',
    title: 'Senior Software Developer & Founder',
    company: 'Identio',
    url: 'https://identio.fi',
    description:
      'I work as a Software Developer & Consultant for government and privately owned companies. Randomly sales, marketing and recruitment.',
  },
  {
    time: 'Sep 2017 to Nov 2018',
    title: 'Software Engineer',
    company: 'Reaktor',
    url: 'https://reaktor.com',
    description:
      "I was doing software development and consulting to the top brands in the world. My biggest project was to develop one of the world's biggest media company's streaming platforms.",
  },
  {
    time: 'Jan 2016 to Sep 2017',
    title: 'Front End Developer & Trainer',
    company: 'Vaadin',
    url: 'https://vaadin.com',
    description:
      'In Vaadin, I was creating Web Components and custom business apps. I also worked as a trainer for Web Components and Polymer framework. In my work I liked to help other developers to leverage the newest features of browsers so they can create the fastest web apps in the world.',
  },
  {
    time: 'Apr 2014 to Dec 2015',
    title: 'Software Developer',
    company: 'Tehden',
    url: 'https://tehden.com',
    description:
      'I worked in a 9 person scrum-team developing the Tehden ERP SaaS-sofware including an external online booking system and a web store. My responsibilities were designing, developing and testing the new features.',
  },
]

const Experience = () => (
  <section className="experience">
    <h4>Experience</h4>
    {jobs.map(job => (
      <Fragment key={`${job.company}-${job.title}`}>
        <div className="left-col">
          <span className="light">{job.time}</span>
        </div>
        <div className="right-col">
          <h2>{job.title}</h2>
          <h3>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              {job.company}
            </a>
          </h3>
          <p className="light">{job.description}</p>
        </div>
      </Fragment>
    ))}
  </section>
)

export default Experience
