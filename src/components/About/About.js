import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { contact, about } from '../../portfolio'

import './About.css'

const About = () => {
  const {photo,name, role, description, social } = about

  return (
    <div className='about center'>
      {photo && (
       <img style={{borderRadius: 10000, marginBottom: 20}} height="250px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1 >
          <center>I{'\''}m <span className='about__name'>{name}.</span></center>
        </h1>
      )}

      {role && <h2 className='about__role'><center>{role}</center></h2>}
      <p className='about__desc'> <center>{description}</center></p>
      <div className='about__contact center'>
        {social && (
          <>
            {social.github && (
              <a style={{marginRight: '20%'}}
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a style={{marginRight: '20%'}}
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                aria-label='email'
                className='link link--icon'
              >
                <EmailIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
