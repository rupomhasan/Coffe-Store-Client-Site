const featuare = () => {
  return (
    <div className="bg-[#eceae3]">
      <div className="max-w-screen-xl grid grid-cols-2 md:grid-cols-4 px-5 gap-4 py-14 mx-auto">
        <div className="space-y-4">
          <img src="/src/assets/icons/1.png" />
          <h4 className="text-4xl font-rancho text-[#331a15]">Awesome Aroma</h4>
          <p className="font-raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="space-y-4">
          <img src="/src/assets/icons/2.png" />
          <h4 className="text-4xl font-rancho text-[#331a15]">High Quality</h4>
          <p className="font-raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>{" "}
        <div className="space-y-4">
          <img src="/src/assets/icons/3.png" />
          <h4 className="text-2xl md:text-4xl font-rancho text-[#331a15]">
            Pure Crades
          </h4>
          <p className="font-raleway">
            The coffee is make of the green coffee beans which you will love{" "}
          </p>
        </div>{" "}
        <div className="space-y-4">
          <img src="/src/assets/icons/4.png" />
          <h4 className="text-2xl md:text-4xl font-rancho text-[#331a15]">
            Proper Roasting{" "}
          </h4>
          <p className="font-raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default featuare;
