import CTA from '../_components/CTA';
import Skillset from '../_components/Skillset';
import Portfolio from '../_components/Portfolio';

function SecondInfo() {
  return (
    <section className="second-info">
      <Skillset />

      <Portfolio />

      <CTA />
    </section>
  );
}

export default SecondInfo;
