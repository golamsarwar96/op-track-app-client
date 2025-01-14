import { Card } from "flowbite-react";
const ServiceCard = ({ service }) => {
  const { image, service_name, description } = service || {};
  return (
    <div>
      <Card
        className="w-72"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={image}
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {service_name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description.length > 98 ? description.slice(0, 97) : description}
        </p>
      </Card>
    </div>
  );
};

export default ServiceCard;
