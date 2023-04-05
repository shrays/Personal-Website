import './Footer.css'
const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="footer">
    <a href="https://shrayswarup.com" className="link footer__link">
      © {currentYear} Shray Swarup
    </a>
  </footer>
)

export default Footer
