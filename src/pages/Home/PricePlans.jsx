import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Lottie from "lottie-react";
import PlansCard from "../../components/PlansCard";
import planLottie from "../../assets/lottie/pricePlan.json";

const PricePlans = () => {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    fetch("/json/plans.json")
      .then((res) => res.json())
      .then((data) => setPlans(data));
  }, []);
  return (
    <div className=" flex justify-center lg:flex-row flex-col items-center lg:gap-[52px] mt-20">
      <div>
        <SectionTitle title="Our Plans"></SectionTitle>
        <p className="text-textSecColor font-bold w-[80%] text-center mx-auto">
          We have different types of plans starting from small startups to Big
          Corporations
        </p>
        <Lottie
          animationData={planLottie}
          className="w-[400px] h-[400px] mx-auto"
          loop={true}
          autoplay={true}
        ></Lottie>
      </div>
      <div className="bg-highlightColor/80 rounded-lg p-5 grid  grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5">
        {plans.map((singlePlan, idx) => (
          <PlansCard key={idx} singlePlan={singlePlan}></PlansCard>
        ))}
      </div>
    </div>
  );
};

export default PricePlans;
