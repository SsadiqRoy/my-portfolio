import { FaArrowRight, FaFigma, FaGithub } from "react-icons/fa6";

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
            <p>The wild oasis is a demo web application that allows users to view and book cabins of The Wild Oasis hotel for night stays.</p>
            <div className="portfolio-card_content-buttons">
              <a target="_blank" href="https://sr-twow.vercel.app/" className="btn-primary-alt btn-small portfolio-website">
                visit site <FaArrowRight />
              </a>
              <a target="_blank" href="https://github.com/SsadiqRoy/the-wild-oasis-website" className="portfolio-repo">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/test-me.png" alt="The Wild Oasis Dashoard" />
          </div>
          <div className="portfolio-card_content">
            <h4>Test Me</h4>
            <p>The Test Me app is simple quiz application that test a user&apos;s knowledge with multiple choice questions on topics.</p>
            <div className="portfolio-card_content-buttons">
              <a target="_blank" href="https://sr-test-me.vercel.app/" className="btn-primary-alt btn-small portfolio-website">
                visit site <FaArrowRight />
              </a>
              <a target="_blank" href="https://github.com/SsadiqRoy/test-me" className="portfolio-repo">
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
              <a target="_blank" href="https://sr-twod.vercel.app/" className="btn-primary-alt btn-small portfolio-website">
                visit site <FaArrowRight />
              </a>
              <a target="_blank" href="https://github.com/SsadiqRoy/the-wild-oasis-dashboard" className="portfolio-repo">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/opencook.png" alt="OpenCook Design" />
          </div>
          <div className="portfolio-card_content">
            <h4>OpenCook</h4>
            <p>OpenCook is a plaltform for various kinds of dishes accorss the world, where you can view or post how to cook a dish.</p>
            <div className="portfolio-card_content-buttons">
              <a
                target="_blank"
                href="https://www.figma.com/proto/3bWDxTLxd9JdeLxdUYpDrn?node-id=0-1&t=8Pc4GxNELFcsuOn8-6"
                className="btn-primary-alt btn-small portfolio-website"
              >
                View Design <FaArrowRight />
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/proto/3bWDxTLxd9JdeLxdUYpDrn?node-id=0-1&t=8Pc4GxNELFcsuOn8-6"
                className="portfolio-repo"
              >
                <FaFigma />
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/supaspace.png" alt="OpenCook Design" />
          </div>
          <div className="portfolio-card_content">
            <h4>SupaSpace</h4>
            <p>A real estate and hospitality platform where hosts can list spaces and guest can discover spaces and book, rent or buy</p>
            <div className="portfolio-card_content-buttons">
              <a
                target="_blank"
                href="https://www.figma.com/proto/1p66nHNiCoO0nY1tuGMW7u?node-id=1053-6824&t=8Pc4GxNELFcsuOn8-6"
                className="btn-primary-alt btn-small portfolio-website"
              >
                View Design <FaArrowRight />
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/proto/1p66nHNiCoO0nY1tuGMW7u?node-id=1053-6824&t=8Pc4GxNELFcsuOn8-6"
                className="portfolio-repo"
              >
                <FaFigma />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/kirickin.png" alt="OpenCook Design" />
          </div>
          <div className="portfolio-card_content">
            <h4>Kirickin</h4>
            <p>An e-commerce platform for selling consumer goods. Clothing, tools, devices and any other.</p>
            <div className="portfolio-card_content-buttons">
              <a
                target="_blank"
                href="https://www.figma.com/proto/IMindDeotAIpld9AmnVvfg?node-id=61-2&t=8Pc4GxNELFcsuOn8-6"
                className="btn-primary-alt btn-small portfolio-website"
              >
                View Design <FaArrowRight />
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/proto/IMindDeotAIpld9AmnVvfg?node-id=61-2&t=8Pc4GxNELFcsuOn8-6"
                className="portfolio-repo"
              >
                <FaFigma />
              </a>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <div className="portfolio-card_image">
            <img src="/vibrantfork.png" alt="OpenCook Design" />
          </div>
          <div className="portfolio-card_content">
            <h4>Vibrant Fork</h4>
            <p>An online service for a plant based meal business that to doorstep.</p>
            <div className="portfolio-card_content-buttons">
              <a target="_blank" href="https://vibrantfork.com" className="btn-primary-alt btn-small portfolio-website">
                Visit Website <FaArrowRight />
              </a>
              <a
                target="_blank"
                href="https://www.figma.com/proto/p9LRNQq8utHAeOgET4bfZ5?node-id=0-1&t=8Pc4GxNELFcsuOn8-6"
                className="portfolio-repo"
              >
                <FaFigma />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-repos">
        <a href="https://github.com/SsadiqRoy/The-Distro-Api" className="btn-primary-alt btn-small portfolio-website portfolio-website--flex">
          <span>
            <FaGithub />
          </span>
          <span>
            The Distro Back-End API <FaArrowRight />
          </span>
        </a>

        <a href="https://github.com/SsadiqRoy/eyeclient-api" className="btn-primary-alt btn-small portfolio-website portfolio-website--flex">
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
