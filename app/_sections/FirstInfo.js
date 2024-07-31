import CareerCards from '../_components/CareerCards';
import { Akwaaba, WhatIDo } from '../_components/FirstInfoAssist';

/* eslint-disable @next/next/no-img-element */
function FirstInfo() {
  return (
    <section className="first-info">
      <div className="content">
        <Akwaaba>
          <div className="akwaaba-left">
            <h2>Akwaaba 👋</h2>

            <div className="akwaaba-left-copy">
              <p>
                Am Nigal Madebombe Samuel <strong>(Ssadiq Roy)</strong>,<br /> a professional Full-Stack web developer
                and UI/UX designer with 3+ years of experience in the industry
              </p>

              <p>
                I dedicate to build beautiful, fast and responsive web applications through carefully-crafted code and
                user-centric design
              </p>
            </div>
          </div>

          <div className="akwaaba-right">
            <img src="akwaaba.svg" alt="Greetings" />
          </div>
        </Akwaaba>

        <WhatIDo>
          <div className="what-i-do-left">
            <img src="webs-n-code.svg" alt="Greetings" />
          </div>

          <div className="what-i-do-right">
            <h2>What I Do 💪</h2>

            <div className="what-i-do-right_careers">
              <CareerCards />
            </div>
          </div>
        </WhatIDo>
      </div>
    </section>
  );
}

export default FirstInfo;
