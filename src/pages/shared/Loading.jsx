import { Spinner } from "flowbite-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-52">
      <Spinner className="text-4xl" aria-label="Default status example" />;
    </div>
  );
};

export default Loading;
