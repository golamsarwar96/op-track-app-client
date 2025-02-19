import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const HrOverview = () => {
  const axiosSecure = useAxiosSecure();

  const { data: paymentReq = [], refetch } = useQuery({
    queryKey: ["paymentReq"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/payment-req");
      console.log(data);
      return data;
    },
  });
  return (
    <div className="px-3">
      <div>
        <h1 className="text-center text-5xl text-darkMode mt-10 font-bold">
          Over<span className="text-primaryColor">view</span>
        </h1>
        <div className="lg:w-[15%] w-[80%] py-20">
          <p className="font-bold mb-2">Total Payment Request</p>
          <h1 className=" font-bold text-5xl text-center bg-darkMode text-primaryColor p-5">
            {paymentReq.length}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HrOverview;
