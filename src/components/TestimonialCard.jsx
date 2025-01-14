import { Card } from "flowbite-react";
import { ImQuotesRight } from "react-icons/im";

const TestimonialCard = ({ item }) => {
  const { name, cus_img, company, position, testimonial } = item || {};
  return (
    <Card className="max-w-sm mx-auto bg-primaryColor/90 text-white">
      <div className="flex flex-col items-center pb-10 font-bold">
        <img
          alt="Bonnie image"
          height="96"
          src={cus_img}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-400 dark:text-gray-400">
          {position}
        </span>
        <span className="text-sm text-white dark:text-gray-400">{company}</span>
        <ImQuotesRight className="mt-3 text-4xl text-darkMode"></ImQuotesRight>
        <div className="mt-3 flex space-x-3 lg:mt-5 text-center">
          <p>{testimonial}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
