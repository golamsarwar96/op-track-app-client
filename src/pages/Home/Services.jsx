import SectionTitle from "../../components/SectionTitle";
import { useEffect, useState } from "react";
import ServiceCard from "../../components/serviceCard";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/json/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-12">
      <SectionTitle
        title="Our Services"
        subHeading="Browse our service and find out which service suites you best."
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-12">
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
