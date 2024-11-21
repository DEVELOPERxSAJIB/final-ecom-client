import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import banner1 from "../../../assets/slider/banner1.jpg";
import banner2 from "../../../assets/slider/banner2.jpg";
import banner3 from "../../../assets/slider/banner3.png";
import banner4 from "../../../assets/slider/banner4.png";
import banner5 from "../../../assets/slider/banner5.png";

const HomeSlider = () => {
  const banners = [
    {
      image: banner1,
      productLink: "#",
    },
    {
      image: banner3,
      productLink: "#",
    },
    {
      image: banner2,
      productLink: "#",
    },
    {
      image: banner4,
      productLink: "#",
    },
    {
      image: banner5,
      productLink: "#",
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //     delay: 2500,
        //   }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {banners?.map((banner, index) => (
          <>
            <SwiperSlide key={index}>
              <a href={banner?.productLink}>
                <img
                  style={{
                    maxHeight: "500px",
                    width: "100vw",
                    objectFit: "cover",
                  }}
                  src={banner?.image}
                  alt=""
                />
              </a>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </>
  );
};

export default HomeSlider;
