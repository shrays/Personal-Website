import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h5>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h5>
      <Navbar />
    </header>
  )
}

export default Header
