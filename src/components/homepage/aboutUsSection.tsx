import AboutImg from "../../assets/images/fast.jpg";
import { SectionTitle, SectionWrapper } from "../common";

const AboutUs = () => {
  return (
    <SectionWrapper>
      <div className="flex w-3/4 mx-auto gap-16 max-sm:gap-8 max-sm:flex-col max-sm:w-full">
        <img
          src={AboutImg}
          alt="about"
          className="w-1/2 border-b-8 border-l-8 border-secondary max-sm:w-full"
        />
        <div className="w-full">
          <SectionTitle title="About Us" />
          <div className="mt-5 text-justify">
            <p>
              Welcome to <b>Turfinfra</b>, a distinguished construction company
              that stands at the forefront of the industry, embodying a
              commitment to excellence, innovation, and unwavering
              professionalism. With a diverse portfolio spanning various
              sectors.
            </p>
            <p className="mt-3">
              We specialize in delivering high-quality construction solutions
              tailored to meet the unique needs of our clients with Road
              Construction, Building Construction, Infrastructure Work,
              Commercial Projects, Residential Projects, Trimix Work for Roads,
              IPS Flooring Work, Excavation, Machinery Hire, All Types of
              Construction Work, Housing Small Bungalow Work, and Material and
              Labor Rate Services
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
