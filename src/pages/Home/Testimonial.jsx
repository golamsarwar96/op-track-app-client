import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import TestimonialCard from "../../components/TestimonialCard";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/json/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="flex justify-center items-center flex-col gap-12">
      <SectionTitle
        title="Testimonials"
        subHeading={"Listen From The Very Best. Clients Love What We Provide."}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px]">
        {testimonials.slice(0, 3).map((item, idx) => (
          <TestimonialCard key={idx} item={item}></TestimonialCard>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
