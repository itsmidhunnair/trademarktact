import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import { SectionTitle } from "../common";
import { useEffect, useRef, useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import fastImg from "../../assets/images/fast.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const buttons = {
  0: {
    id: 0,
    activeClass: "bg-[#5A9275] text-white border-[#5A9275]",
    inactiveClass:
      "text-[#5A9275] hover:bg-[#5A9275] hover:text-white border-[#5A9275]",
    class: "col-span-1",
    color: "#5A9275",
    text: "Fast",
    description:
      "We are a team of young and enthusiastic professionals who realise the value of time and speed. Hence, we deliver with utter dedication and zest with zero delays.",
  },
  1: {
    id: 1,
    activeClass: "bg-[#C8B500] text-white border-[#C8B500]",
    inactiveClass:
      "text-[#C8B500] hover:bg-[#C8B500] hover:text-white border-[#C8B500]",
    class: "col-span-3",
    color: "#C8B500",
    text: "Reliable",
    description:
      "We are a team of intellect-protectors who can be relied on to make your vision a recognised reality.",
  },
  2: {
    id: 2,
    activeClass: "bg-[#4682B4] text-white border-[#4682B4]",
    inactiveClass:
      "text-[#4682B4] hover:bg-[#4682B4] hover:text-white border-[#4682B4]",
    class: "col-span-3",
    color: "#4682B4",
    text: "Result Oriented",
    description:
      "The field of registration is a systematic one and we keep our eyes fixed on the end-goal. You assign us the task, sit back and leave the worries to us.",
  },
  3: {
    id: 3,
    activeClass: "bg-[#FF6F91] text-white border-[#FF6F91]",
    inactiveClass:
      "text-[#FF6F91] hover:bg-[#FF6F91] hover:text-white border-[#FF6F91]",
    class: "col-span-1",
    color: "#FF6F91",
    text: "Advisory",
    description:
      "We do not leave you strangled in a problem or dilemma. Instead, we suggest you alternative ways out and provide other options to consider to get desirable results.",
  },
};

const Features = () => {
  const [slide, setSlide] = useState(0);
  const [swiperState, setSwiperState] = useState();

  useEffect(() => {
    if (swiperState) {
      swiperState.slideTo(slide);
    }
  }, [slide]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-x-20 mt-12">
        <div className="col-span-5 w-full p-5">
          <SectionTitle
            title="We Are"
            specialText={buttons[slide].text}
            specialTextClass={`text-[${buttons[slide].color}] whitespace-nowrap`}
            center={false}
          />
          <div className="grid grid-cols-4 text-xl text-center font-semibold gap-6 text-white mt-6">
            {Object.keys(buttons).map((key) => (
              <button
                key={`button_${key}`}
                onClick={() => setSlide(key)}
                className={`${
                  slide === buttons[key].id
                    ? buttons[key].activeClass
                    : buttons[key].inactiveClass
                } p-5 border-2 rounded-md ${buttons[key].class}`}
              >
                {buttons[key].text}
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
            onSwiper={setSwiperState}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={(e) => {
              setSlide(e.activeIndex);
            }}
          >
            {Object.keys(buttons).map((key) => (
              <SwiperSlide key={`main_slider_${key}`}>
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center items-center">
                    <img src={fastImg} alt="fast" />
                  </div>
                  <div className="text-xl font-semibold text-neutral-500 ">
                    <p className={`text-[${buttons[key].color}] text-3xl pb-5`}>
                      {buttons[key].text}
                    </p>
                    <p className="text-justify">{buttons[key].description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;
