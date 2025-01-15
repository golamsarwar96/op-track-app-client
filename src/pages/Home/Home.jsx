import Banner from "../Home/Banner";
import PricePlans from "./PricePlans";
import Services from "./Services";
import Testimonial from "./Testimonial";
import FreqAskedQues from "./FreqAskedQues";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>OpTrack | Home</title>
      </Helmet>
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
