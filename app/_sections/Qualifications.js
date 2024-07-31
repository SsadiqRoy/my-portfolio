import Slider, { SliderIndicator, SliderItem, SliderItems } from '../_components/Slider';

function Qualifications() {
  return (
    <section className="qualifications">
      <div className="content">
        <div className="qualifications-head">
          <h2 className="section-head-dark">Qualifications</h2>
          <p>Took courses from the best selling, top rated and most effective teachers on Udemy</p>
        </div>

        <Slider>
          <SliderItems>
            <SliderItem hours="28" image="css" name="Advance css and sass: flexbox, grid, animation and more!" />
            <SliderItem
              hours="69"
              image="javascript"
              name="The complete javascript course 2022: from Zero to expert!"
            />
            <SliderItem hours="42" image="nodejs" name="Node.js, Express, MongoDB & More: The complete bootcamp 2022" />
            <SliderItem hours="46.5" image="seo" name="SEO training: complete SEO course & chatGPT SE0 Copywriting" />
          </SliderItems>

          <SliderIndicator />
        </Slider>
      </div>
    </section>
  );
}

export default Qualifications;
