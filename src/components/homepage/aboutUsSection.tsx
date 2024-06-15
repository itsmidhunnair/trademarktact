import AboutImg from "../../assets/images/fast.jpg";
import { SectionTitle, SectionWrapper } from "../common";

const AboutUs = () => {
  return (
    <SectionWrapper bgType="secondary">
      <SectionTitle title="About Us" />
      <div className="flex w-3/4 mt-8 mx-auto gap-16 max-sm:gap-8 max-sm:flex-col max-sm:w-full">
        <img
          src={AboutImg}
          alt="about"
          className="w-1/2 border-b-8 border-l-8 border-secondary max-sm:w-full"
        />
        <div className="w-full">
          <div className="mt-5 text-justify">
            <p>
              We are a team of dynamic and enthusiastic professionals who have
              mastered the field of <b>intellectual property law.</b> Although
              the arena might seem complicated on the outside, our motto is to
              provide <b>swift and effective services</b> so that you can take
              your mind off procedural complexities. With{" "}
            </p>
            <p className="my-3">
              <b>100+ satisfied clients in over 3 years,</b> TrademarkTact
              consists of highly experienced CA, CS and advocates who are
              devoted to assisting other professionals in realising their
              dreams. We offer a plethora of varied services ranging from{" "}
              <b>
                trademark registration in and outside of India, i.e. WIPO,
                copyright, patent, design, Udyog Aadhar registration, Gumasta,
                and ISO certificate.
              </b>{" "}
            </p>
            <p>
              Dedicated to being a reliable destination for individuals and
              businesses to protect their intellectual property rights, we are
              your{" "}
              <b>
                swift one-stop solution for inevitable, crucial and righteous
                legalities.
              </b>
            </p>
            <button className="bg-primary mt-5 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
