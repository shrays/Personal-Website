import './Footer.css'
const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer className="footer">
    <span className="footer__text">
      © {currentYear} Shray Swarup
    </span>
  </footer>
)

export default Footer
