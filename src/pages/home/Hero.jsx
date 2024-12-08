import bannerImg from "../../assets/banner.png";
import { CiSearch } from "react-icons/ci";
import TooltipButton from "../../components/TooltipButton";
const Hero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="md:pt-44 px-2 pt-24 text-center space-y-6 md:w-1/2 mx-auto">
        <h1 className="text-4xl lg:text-5xl  font-medium lg:leading-tight leading-snug">
          Make Your Interior More Minimalistic & Mordan
        </h1>
        <p className="text-lg font-normal lg:w-2/3 mx-auto">
          Turn your room with panto into a lot more minimalist and modern with
          ease and speed
        </p>

        {/* search field */}
        <div className="relative inline-block z-30">
          <input
            className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none placeholder:text-white"
            type="text"
            placeholder="Search furniture"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer">
            <CiSearch />
          </div>
        </div>
      </div>

      {/* bottom blur effect */}
      <div className="absolute inset-x-0 -mb-2 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />

      {/* hover button for displaying tooltip box  */}
      
      <div className="hidden lg:block absolute bottom-40 left-24 ">
        <TooltipButton position="bottom"/>
      </div>
      <div className="hidden lg:block absolute bottom-52 left-96 ">
        <TooltipButton position="bottom"/>
      </div>
      <div className="hidden lg:block absolute bottom-20 right-[590px] ">
        <TooltipButton position="bottom"/>
      </div>
      <div className="hidden lg:block absolute bottom-12 right-16 ">
        <TooltipButton position="bottom"/>
      </div>

    </section>
  );
};

export default Hero;
