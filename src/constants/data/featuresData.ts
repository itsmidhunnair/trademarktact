import fastImg from "../../assets/images/fast.jpg";
import reliableImg from "../../assets/images/reliable.jpg";
import resultOrientedImg from "../../assets/images/result-oriented.jpg";
import advisoryImg from "../../assets/images/advisory.jpg";

export const FEATURES_DATA = [
  {
    id: 0,
    activeClass: "bg-[#5A9275] text-white border-[#5A9275]",
    inactiveClass:
      "text-[#5A9275] hover:bg-[#5A9275] hover:text-white border-[#5A9275]",
    class: "col-span-1",
    color: "#5A9275",
    text: "Fast",
    description:
      "We are a team of young and enthusiastic professionals who realise the value of time and speed. Hence, we deliver with utter dedication and zest with zero delays.",
    img: fastImg,
  },
  {
    id: 1,
    activeClass: "bg-[#4682B4] text-white border-[#4682B4]",
    inactiveClass:
      "text-[#4682B4] hover:bg-[#4682B4] hover:text-white border-[#4682B4]",
    class: "col-span-3",
    color: "#4682B4",
    text: "Result Oriented",
    description:
      "The field of registration is a systematic one and we keep our eyes fixed on the end-goal. You assign us the task, sit back and leave the worries to us.",
    img: resultOrientedImg,
  },
  {
    id: 2,
    activeClass: "bg-[#C8B500] text-white border-[#C8B500]",
    inactiveClass:
      "text-[#C8B500] hover:bg-[#C8B500] hover:text-white border-[#C8B500]",
    class: "col-span-2",
    color: "#C8B500",
    text: "Reliable",
    description:
      "We are a team of intellect-protectors who can be relied on to make your vision a recognised reality.",
    img: reliableImg,
  },
  {
    id: 3,
    activeClass: "bg-[#FF6F91] text-white border-[#FF6F91]",
    inactiveClass:
      "text-[#FF6F91] hover:bg-[#FF6F91] hover:text-white border-[#FF6F91]",
    class: "col-span-2",
    color: "#FF6F91",
    text: "Advisory",
    description:
      "We do not leave you strangled in a problem or dilemma. Instead, we suggest you alternative ways out and provide other options to consider to get desirable results.",
    img: advisoryImg,
  },
];
