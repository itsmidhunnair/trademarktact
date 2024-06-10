import { useEffect, useState } from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { FEATURES_DATA } from "../../constants/data";
import { SectionTitle, SectionWrapper } from "../common";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const Features = () => {
  const [slide, setSlide] = useState(0);
  const [swiperState, setSwiperState] = useState<SwiperClass>();

  useEffect(() => {
    if (swiperState) {
      swiperState.slideTo(slide);
    }
  }, [slide]);

  return (
    <SectionWrapper>
      <div className="grid grid-cols-12 gap-x-20 mt-12">
        <div className="col-span-5 w-full p-5">
          <div className="h-28">
            <SectionTitle
              title="We Are"
              specialText={FEATURES_DATA[slide].text}
              specialTextClass={`text-[${FEATURES_DATA[slide].color}] whitespace-nowrap`}
              center={false}
            />
          </div>
          <div className="grid grid-cols-4 text-xl text-center font-semibold gap-6 text-white mt-6">
            {FEATURES_DATA.map((data) => (
              <button
                key={`button_${data.id}`}
                onClick={() => setSlide(data.id)}
                className={`${
                  slide === data.id ? data.activeClass : data.inactiveClass
                } p-5 border-2 rounded-md duration-500 transition-all ${
                  data.class
                }`}
              >
                {data.text}
              </button>
            ))}
          </div>
        </div>
        <div className="w-px mx-auto bg-gray-200 col-span-1"></div>
        <div className="flex col-span-6 w-full">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Autoplay]}
            className="mySwiper2"
            onSwiper={(e) => setSwiperState(e)}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={(e) => {
              setSlide(e.activeIndex);
            }}
          >
            {FEATURES_DATA.map((data) => (
              <SwiperSlide key={`main_slider_${data.id}`}>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center items-center">
                    <img src={data.img} alt="fast" />
                  </div>
                  <div className="text-xl font-semibold text-neutral-500 ">
                    <p className={`text-[${data.color}] text-3xl pb-5`}>
                      {data.text}
                    </p>
                    <p className="text-justify">{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
