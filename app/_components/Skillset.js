import { CiServer } from 'react-icons/ci';
import { FaCss3, FaFigma, FaFileCode, FaHtml5, FaNodeJs, FaReact, FaSass, FaTv } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb, SiRedux, SiTailwindcss } from 'react-icons/si';
import { TbBrandMysql } from 'react-icons/tb';
import Glass from './Glass';

function Skillset() {
  return (
    <Glass className="content skillset">
      <h2 className="section-head-light">Skillset & Tech stack</h2>

      <div className="stack-container">
        <div className="stack-group">
          <span className="stack-item">
            <span className="stack-item-logo color-html">
              <FaFileCode />
            </span>
            <span className="stack-item-name">web developmet</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-figma">
              <FaFigma />
            </span>
            <span className="stack-item-name">UI/UX Design</span>
          </span>
          <span className="stack-item">
            <span className="stack-item-logo color-html">
              <FaTv />
            </span>
            <span className="stack-item-name">front-end development</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-css">
              <CiServer />
            </span>
            <span className="stack-item-name">back-end development</span>
          </span>
        </div>

        <div className="stack-group">
          <span className="stack-item">
            <span className="stack-item-logo color-node-js">
              <FaNodeJs />
            </span>
            <span className="stack-item-name">nodeJs</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-javascript">
              <IoLogoJavascript />
            </span>
            <span className="stack-item-name">Javascript</span>
          </span>
          <span className="stack-item">
            <span className="stack-item-logo color-html">
              <FaHtml5 />
            </span>
            <span className="stack-item-name">HTML</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-css">
              <FaCss3 />
            </span>
            <span className="stack-item-name">CSS</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-react">
              <FaReact />
            </span>
            <span className="stack-item-name">react</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-next-js">
              <RiNextjsFill />
            </span>
            <span className="stack-item-name">nextJs</span>
          </span>
        </div>

        <div className="stack-group">
          <span className="stack-item">
            <span className="stack-item-logo color-node-js">
              <SiMongodb />
            </span>
            <span className="stack-item-name">mongoDb</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-sql">
              <TbBrandMysql />
            </span>
            <span className="stack-item-name">MySql</span>
          </span>
          <span className="stack-item">
            <span className="stack-item-logo color-figma">
              <SiRedux />
            </span>
            <span className="stack-item-name">redux</span>
          </span>

          <span className="stack-item">
            <span className="stack-item-logo color-sass">
              <FaSass />
            </span>
            <span className="stack-item-name">sass</span>
          </span>
          <span className="stack-item">
            <span className="stack-item-logo color-tailwind">
              <SiTailwindcss />
            </span>
            <span className="stack-item-name">tailwind</span>
          </span>
        </div>
      </div>
    </Glass>
  );
}

export default Skillset;
