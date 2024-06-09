// import heroImg from "@assets/images/homepage/hero-img.webp";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [loadCount, setLoadCount] = useState(0);
  console.log("🚀 ~ HeroSection ~ loadCount:", loadCount);

  return (
    <div className="flex w-full h-full max-md:flex-col">
      <div className="flex-1 max-sm:pt-12">
        {/* <img src={he
        
        roImg} alt="hero_img" className="w-full" /> */}
      </div>
      <div className="md:p-16 flex-1 max-md:text-center flex flex-col justify-center font-bold text-neutral-700">
        <h4 className="tracking-wide font-bold text-3xl animate-fade1 text-neutral-500 max-sm:text-xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("What's in a name?")
                .callFunction(() => {
                  setLoadCount(1);
                })
                .start();
            }}
            options={{
              cursor: "",
              delay: 25,
            }}
          />
        </h4>
        {loadCount >= 1 ? (
          <>
            <h2 className="text-7xl pb-6 antialiased animate-fade2 max-sm:text-4xl">
              Everything!
            </h2>
            <h4 className="capitalize tracking-wide font-bold text-3xl animate-fade15 text-neutral-500 mt-6 max-sm:text-xl">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(900)
                    .typeString(
                      "Get your intellectual property registered with"
                    )
                    .callFunction(() => {
                      setLoadCount(2);
                    })
                    .start();
                }}
                options={{
                  cursor: "",
                  delay: 25,
                }}
              />
            </h4>
            {loadCount >= 2 ? (
              <h2 className="text-7xl pb-6 antialiased animate-fade2 max-sm:text-4xl">
                <span className="text-primary">Trademark</span>Tact
              </h2>
            ) : (
              <h2 className="text-7xl pb-6 max-sm:text-4xl invisible">
                <span className="text-primary">Trademark</span>Tact
              </h2>
            )}
          </>
        ) : (
          <div className="invisible">
            <h2 className="text-7xl pb-6 max-sm:text-4xl">
              Everything!
            </h2>
            <h4 className="font-bold text-3xl mt-6 max-sm:text-xl">
              Get your intellectual property registered with
            </h4>
            <h2 className="text-7xl pb-6 max-sm:text-4xl">
              <span>Trademark</span>Tact
            </h2>
          </div>
        )}
        {/* <div className="flex gap-4 mt-8 justify-between">
          {circleLinks.map((link) => (
            <div
              key={link.link}
              className={` w-full h-full max-w-52 max-h-52 aspect-square flex justify-center items-center rounded-full border border-black ${link.color}`}
            >
              {link.text}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
