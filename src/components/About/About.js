import GitHubIcon from '@mui/icons-material/GitHub'
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
          I{"'"}m <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">{role}</h2>}
      <p className="about__desc"> {description}</p>
      <div className="about__contact">
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
