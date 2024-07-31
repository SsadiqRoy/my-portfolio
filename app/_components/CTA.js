import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import CTAForm from './CTAForm';
import Glass from './Glass';

function CTA() {
  return (
    <Glass className="content cta">
      <div className="cta-grid">
        <div className="cta-grid_left">
          <div>
            <h2 className="section-head-light">Let&apos;s Discuss Your Project</h2>

            <p>
              I deliver high quality solutions through creative problem-solving focusing on performance and
              accessibility
            </p>
            <p>
              I build Secure, Scalable and High-Performance solutions tailored to meet project requirements from
              designing, architecting and building to managing.
            </p>
          </div>

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
        </div>

        <div className="cta-grid_right">
          <CTAForm />

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
        </div>
      </div>
    </Glass>
  );
}

export default CTA;
