import React from "react";
import SectionTitles from "../../../components/SectionTitles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slideImg1 from "../../../assets/home/slide1.jpg"
import slideImg2 from "../../../assets/home/slide2.jpg"
import slideImg3 from "../../../assets/home/slide3.jpg"
import slideImg4 from "../../../assets/home/slide4.jpg"
import slideImg5 from "../../../assets/home/slide5.jpg"

const Category = () => {
  return (
    <div className="mb-24">
      <SectionTitles
        subHeading="---From 11:00am to 10:00pm---"
        heading="ORDER ONLINE"
      ></SectionTitles>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           
           <img src={slideImg1} alt="" />
            <h1 className="text-center text-white text-3xl uppercase -mt-16">salad</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg2} alt="" />
            <h1 className="text-center text-white text-3xl uppercase -mt-16">soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg3} alt="" />
            <h1 className="text-center text-white text-3xl uppercase -mt-16">pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg4} alt="" />
            <h1 className="text-center text-white text-3xl uppercase -mt-16">soup</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slideImg5} alt="" />
            <h1 className="text-center text-white text-3xl uppercase -mt-16">desserts</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
