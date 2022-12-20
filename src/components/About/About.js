import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { contact, about } from '../../portfolio'

import './About.css'

const About = () => {
  const { photo, name, role, description, social } = about

  return (
    <div className="about center">
      {photo && (
        <img
          style={{ borderRadius: 10000, marginBottom: 20 }}
          height="250px"
          alt="Avatar placeholder"
          src={photo}
        />
      )}
      {name && (
        <h1>
          <center>
            I{"'"}m <span className="about__name">{name}.</span>
          </center>
        </h1>
      )}

      {role && (
        <h2 className="about__role">
          <center>{role}</center>
        </h2>
      )}
      <p className="about__desc">
        {' '}
        <center>{description}</center>
      </p>
      <div className="about__contact center">
        {social && (
          <>
            {social.YouTube && (
              <a
                href={social.YouTube}
                aria-label="YouTube"
                className="link link--icon"
              >
                <YouTubeIcon className="img--icon" />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon className="img--icon" />
              </a>
            )}

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                aria-label="email"
                className="link link--icon"
              >
                <EmailIcon className="img--icon" />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
