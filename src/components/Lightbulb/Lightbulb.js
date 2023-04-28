
//   return (
//     <section className="section skills" id="skills">
//       <h2 className="section__title">Control my Lamp</h2>
//       {/* <ul className="skills__list">
//         {skills.map((skill) => (
//           <li key={uniqid()} className="skills__list-item btn btn--plain">
//             {skill}
//           </li>
//         ))}
//       </ul> */}
//     </section>
//   )
// }

// export default Lightbulb

import { lightbulb } from '../../portfolio';
import './Lightbulb.css';

const Lightbulb = () => {
  // if (!lightbulb.status) return null;

  const handleClick = async () => {
    const response = await fetch('/.netlify/functions/toggle').then(response => response.json())
    console.log(JSON.stringify(response))
    // console.log('Button clicked');
  };

  return (
    <section className="section lightbulb" id="lightbulb">
      <h2 className="section__title">Control my Lamp</h2>
      <ul className="lightbulb__list">
        <li className="lightbulb__list-item btn btn--plain" onClick={handleClick}>
          Toggle Lamp
        </li>
      </ul>
    </section>
  );
};

export default Lightbulb;