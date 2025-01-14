import { Card } from "flowbite-react";

const PlansCard = ({ singlePlan }) => {
  const { plan_name, plan_img, price, services_included } = singlePlan || {};
  return (
    <Card className="w-[253px] h-[300px]">
      <div className="flex flex-col items-center pb-10">
        <div className="mt-10">
          <img
            alt="Bonnie image"
            height="96"
            src={plan_img}
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
        </div>
        <h5 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
          {plan_name}
        </h5>
        <span className="text-lg text-gray-500 font-medium dark:text-gray-400">
          {price}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6 mb-5">
          <p className="text-sm text-center">{services_included}</p>
        </div>
      </div>
    </Card>
  );
};

export default PlansCard;
