import { Card } from "flowbite-react";
import { useEffect, useState } from "react";

const Training = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/json/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="bg-primaryColor">
      <h1 className="text-5xl text-center mt-24 font-bold pt-12 text-darkMode">
        Training & Development
      </h1>
      <p className="font-semibold dark:text-gray-400 bg-primaryColor rounded-full text-gray-200 py-2 text-center">
        We provide the opportunity to our employees to take courses to develop
        there over skill set.
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-12">
        {courses.map((course) => (
          <div key={course.id} className="text-center mb-16">
            <Card
              className="w-72"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={course?.image}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {course?.title}
              </h5>
              <p className="text-gray-700 dark:text-gray-400 font-bold">
                {course?.topic}
              </p>
              <p className="font-semibold dark:text-gray-400 bg-primaryColor rounded-full text-darkMode py-2">
                Duration: {course?.course_duration}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Training;
