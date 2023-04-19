import uniqid from 'uniqid'
import { lightbulb, skills } from '../../portfolio'
import './Lightbulb.css'

const Lightbulb = () => {
  if (!lightbulb.status) return null

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Control my Lamp</h2>
      {/* <ul className="skills__list">
        {skills.map((skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul> */}
    </section>
  )
}

export default Lightbulb
