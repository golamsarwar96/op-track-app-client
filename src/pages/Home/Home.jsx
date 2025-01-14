import Banner from "../Home/Banner";
import PricePlans from "./PricePlans";
import Services from "./Services";
import Testimonial from "./Testimonial";
import FreqAskedQues from "./FreqAskedQues";
const Home = () => {
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Services></Services>
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
      <section>
        <PricePlans></PricePlans>
      </section>
      <section>
        <FreqAskedQues></FreqAskedQues>
      </section>
    </div>
  );
};

export default Home;
