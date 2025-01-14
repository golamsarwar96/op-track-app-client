import Lottie from "lottie-react";
import SectionTitle from "../../components/SectionTitle";
import FAQLottie from "../../assets/lottie/priceLottie.json";
import { Accordion } from "flowbite-react";
const FreqAskedQues = () => {
  return (
    <div className=" flex lg:flex-row flex-col items-center lg:gap-[52px] mt-20 lg:px-32 px-10">
      <div className="flex-1 lg:order-2">
        <div className="">
          <SectionTitle title="FAQ"></SectionTitle>
          <p className="text-textSecColor font-bold w-[70%] text-center mx-auto mb-7">
            We have answered the most common questions that will help you
            understand us more.
          </p>
        </div>
        <Lottie
          animationData={FAQLottie}
          className="md:w-[600px] md:h-[600px] w-[400px] h-[400px]  mx-auto -mt-24"
          loop={true}
          autoplay={true}
        ></Lottie>
      </div>
      <div className="bg-primaryColor/80 flex-1 w-full rounded-lg p-5 -mt-24 lg:order-1 z-10">
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title className="text-highlightColor">
              What is the cancellation policy?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white dark:text-gray-400">
                You can cancel your subscription anytime before the next billing
                cycle with no extra charges.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-highlightColor">
              Do you offer customer support?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white dark:text-gray-400">
                Yes, we provide 24/7 customer support through chat, email, and
                phone for all plans.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-highlightColor">
              Is my data secure?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-white dark:text-gray-400">
                Absolutely. We use industry-standard encryption and security
                protocols to protect your data.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default FreqAskedQues;
