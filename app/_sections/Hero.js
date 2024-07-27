/* eslint-disable @next/next/no-img-element */
import { FaXTwitter, FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6';
import ClippedItem from '@/app/_components/ClippedItem';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video autoPlay loop playsInline muted className="bg-video">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content">
        <header className="header">
          <a href="/">
            <img src="logo.svg" alt="SR Webs Logo" className="logo" />
          </a>

          <a href="mailto:samuelmadebombe@gmail.com" className="btn-primary">
            contact
          </a>
        </header>

        <div className="copy">
          <h1>
            <span className="copy-top">
              <span>Beauty,</span>
              <span>Creativity,</span>
              <span>Speed &</span>
              <span>Responsiveness</span>
            </span>
          </h1>

          <div className="copy-descriptions">
            <p>Let&apos;s Design and Build your website or web application beyond your imagination</p>
            <p>A craft you would love 💖</p>
          </div>

          <div className="copy-button">
            <a href="mailto:samuelmadebombe@gmail.com" className="btn-primary">
              let&apos;s talk
            </a>
          </div>
        </div>
      </div>

      <div className="clip-area">
        <ClippedItem />

        <div className="connect-icons">
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
    </section>
  );
}

export default Hero;
