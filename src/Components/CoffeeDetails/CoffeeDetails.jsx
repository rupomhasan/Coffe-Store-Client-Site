import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const { name, photo_url, chef, category, price, supplier, taste } = coffee;

  return (
      <div className="bg-[url('/src/assets/more/11.png')] bg-cover">
      <div className="max-w-screen-xl mx-auto ">
          
      <Link to="/" className="flex items-center gap-2 py-12 md:px-5">
        <FaArrowLeftLong className="text-2xl" />

        <p className="text-3xl font-rancho text-[#374151] font  blur-[0.6px]">
          Back to home
        </p>
      </Link>
              <div className="bg-[#f4f3f0]">
                  
      </div>
        <div className="flex justify-between gap-10 items-center max-w-screen-xl  mx-auto px-5 py-20 ">
          <div className="col-span-2 ">
            <img className="max-w-2xl" src={photo_url} alt={name} />
          </div>

          <div>
            <h3 className="text-[#331a15] font-rancho text-5xl blur-[1px] my-10">
              Niceties
            </h3>
            <div className="space-y-2">
              <p className="text-xl font-raleway font-semibold">
                Name : <span className="text-[#5c5b5b]">{name}</span>
              </p>
              <p className="text-xl font-raleway font-semibold">
                Chef : <span className="text-[#5c5b5b]">{chef}</span>
              </p>{" "}
              <p className="text-xl font-raleway font-semibold">
                Supplier : <span className="text-[#5c5b5b]">{supplier}</span>
              </p>{" "}
              <p className="text-xl font-raleway font-semibold">
                Taste : <span className="text-[#5c5b5b]">{taste}</span>
              </p>{" "}
              <p className="text-xl font-raleway font-semibold">
                Category : <span className="text-[#5c5b5b]">{category}</span>
              </p>
              <p className="text-xl font-raleway font-semibold">
                Price : <span className="text-[#5c5b5b]">{price} TK</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
