import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer-items">
          <div className="footer-top">
            <a href="/">
              <img src="logo-white.svg" alt="SR Webs Logo" className="logo" />
            </a>

            <p className="footer-top-copy">Copyright &copy; 2024 Ssadiq Roy.</p>
          </div>

          <div className="footer-middle">
            <div className="social-icons-container">
              <a href="https://wa.me/message/XWNI33XLSKLNA1" className="social-icon">
                <FaWhatsapp />
              </a>
              <a href="https://x.com/SsadiqRoy" className="social-icon">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/in/madebombe-samuel-nigal-3491251bb/" className="social-icon">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/ssadiqroy" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://github.com/SsadiqRoy" className="social-icon">
                <FaGithub />
              </a>
            </div>

            <ul>
              <li>Front-End</li>
              <li>Back-End</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="footer-bottom">
            <p>Copyright &copy; 2024 Ssadiq Roy.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
