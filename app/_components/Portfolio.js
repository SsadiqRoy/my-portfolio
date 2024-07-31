import { FaArrowRight, FaGithub } from 'react-icons/fa6';

function Portfolio() {
  return (
    <div className="content portfolio">
      <h2 className="section-head-light">Portfolio</h2>

      <div className="portfolio-cards">
        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/two-website.png" alt="The Wild Oasis Dashoard" />
          </div>
          <div className="portfolio-card_content">
            <h4>The Wild oasis website</h4>
            <p>
              The wild oasis is a demo web application that allows users to view and book cabins of The Wild Oasis hotel
              for night stays
            </p>
            <div className="portfolio-card_content-buttons">
              <a href="#" className="btn-primary-alt btn-small portfolio-website">
                visit site <FaArrowRight />
              </a>
              <a href="https://github.com/SsadiqRoy/the-wild-oasis-website" className="portfolio-repo">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/the-distro-dashboard-light-alt.png" alt="The Wild Oasis Dashoard" />
          </div>
          <div className="portfolio-card_content">
            <h4>The distro app</h4>
            <p>
              The distro app is distributor app that a distributor uses to manage, sell and request products from
              suppliers
            </p>
            <div className="portfolio-card_content-buttons">
              <a href="#" className="btn-primary-alt btn-small portfolio-website">
                visit site <FaArrowRight />
              </a>
              <a href="https://github.com/SsadiqRoy/The-Distro" className="portfolio-repo">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/two-dashboard.png" alt="The Wild Oasis Dashoard" />
          </div>
          <div className="portfolio-card_content">
            <h4>The Wild oasis dashboard</h4>
            <p>The Wild Oasis Dashoard is used by the employees of the hotel to check-in and out bookings</p>
            <div className="portfolio-card_content-buttons">
              <a href="#" className="btn-primary-alt btn-small portfolio-website">
                visit site <FaArrowRight />
              </a>
              <a href="https://github.com/SsadiqRoy/the-wild-oasis-dashboard" className="portfolio-repo">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-repos">
        <a
          href="https://github.com/SsadiqRoy/The-Distro-Api"
          className="btn-primary-alt btn-small portfolio-website portfolio-website--flex"
        >
          <span>
            <FaGithub />
          </span>
          <span>
            The Distro Back-End API <FaArrowRight />
          </span>
        </a>

        <a
          href="https://github.com/SsadiqRoy/eyeclient-api"
          className="btn-primary-alt btn-small portfolio-website portfolio-website--flex"
        >
          <span>
            <FaGithub />
          </span>
          <span>
            Movies API <FaArrowRight />
          </span>
        </a>

        <a
          href="https://github.com/SsadiqRoy/the-wild-oasis-dashboard"
          className="btn-primary-alt btn-small portfolio-website portfolio-website--flex"
        >
          <span>
            <FaGithub />
          </span>
          <span>
            The Wild Oasis Dashboard Repo <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
