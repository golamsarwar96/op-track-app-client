import Banner from "../Home/Banner";
import PricePlans from "./PricePlans";
import Services from "./Services";
import Testimonial from "./Testimonial";
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
    </div>
  );
};

export default Home;
