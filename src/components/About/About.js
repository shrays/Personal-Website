import PublicIcon from '@mui/icons-material/Public'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import { about } from '../../portfolio'

import './About.css'

const About = () => {
  const { photo, name, role, location, description, social } = about

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
          I{"'"}m <span className="about__name">{name}.</span>
        </h1>
      )}
      {role && <h2>{role}</h2>}
      {location && (
        <div className="about__location">
          <PublicIcon className="img--icon" />
          {location}
        </div>
      )}
      <p className="about__desc"> {description}</p>
      <div className="about__contact center">
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon className="img--icon" />
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

            {social.email && (
              <a
                href={`mailto:${social.email}`}
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
