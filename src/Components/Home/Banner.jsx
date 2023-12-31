const Banner = () => {
  return (
    <div className=" bg-[url('/src/assets/more/3.png')] bg-cover">
      <div className="grid text-center md:text-left px-5 md:grid-cols-2 max-w-screen-2xl mx-auto justify-center items-center  h-[90vh]">
        <div className=""></div>
        <div className="space-y-5">
          <h2 className="font-rancho text-white text-3xl md:text-[55px] md:leading-tight">
            Would your like a Cup of Delicious Coffee?
          </h2>
          <p className="font-raleway text-white text-justify">
            It's coffee time - Sip & Savor - RElaxation back !! Your companion
            of every moment !!! Enjoy the beautiful moments and make them
            memorable.
          </p>
          <button className="btn px-5 bg-[#e3b577] hover:bg-[#E3B577] font-rancho text-black text-2xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
