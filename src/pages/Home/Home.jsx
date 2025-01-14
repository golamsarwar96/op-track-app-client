import Banner from "../Home/Banner";
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
    </div>
  );
};

export default Home;
