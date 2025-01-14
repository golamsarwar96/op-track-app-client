import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
const Banner = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="">
          <img
            className="w-full h-[80vh] object-cover"
            src={banner1}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-3xl md:text-xl text-bases absolute lg:w-[45%] md:w-[65%]  mx-auto lg:left-[440px] md:left-36 left-2  md:top-16 top-16 lg:top-[150px] text-center bg-primaryColor text-white p-8">
            Simplify{" "}
            <span className="bg-darkMode p-2 font-bold">Workflows</span>.
            Amplify{" "}
            <span className="bg-darkMode p-2 font-bold">Productivity</span>.
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full  h-[80vh] object-cover"
            src={banner2}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-3xl md:text-xl text-base absolute lg:w-1/3 md:w-1/2 mx-auto lg:left-[520px] md:left-48 left-16 md:top-52 top-52 lg:top-[390px] text-center bg-primaryColor text-white p-8">
            <span className="bg-darkMode p-2 font-bold">
              Empower. Manage. Succeed.
            </span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[80vh] object-cover"
            src={banner3}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-3xl md:text-xl text-base absolute lg:w-[42%] md:w-[60%] mx-auto lg:left-[450px] md:left-[160px] left-6 md:top-10 top-12 lg:top-[110px] text-center bg-primaryColor text-white p-8">
            Unlock <span className="bg-darkMode p-2 font-bold">Potential</span>.
            Drive <span className="bg-darkMode p-2 font-bold">Performance</span>
            .
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[80vh] object-cover"
            src={banner4}
            alt="Image 1"
          />
          <h1 className="font-semibold lg:text-3xl md:text-xl text-base absolute lg:w-[35%] md:w-1/2  mx-auto lg:left-[300px] md:left-24 left-5 md:top-5 top-5 lg:top-[60px] text-center bg-primaryColor text-white p-8">
            <span className="bg-darkMode p-2 font-bold">
              Work Smarter, Manage Better.
            </span>
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
