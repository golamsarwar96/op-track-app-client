import Banner from "../Home/Banner";
import PricePlans from "./PricePlans";
import Services from "./Services";
import Testimonial from "./Testimonial";
import FreqAskedQues from "./FreqAskedQues";
import { Helmet } from "react-helmet-async";
import AppSection from "./AppSection";
import Newsletter from "./Newsletter";
const Home = () => {
  return (
    <div className="mt-10">
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
      <section>
        <AppSection></AppSection>
      </section>
      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default Home;
