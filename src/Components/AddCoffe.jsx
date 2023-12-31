import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

import "../index.css";
const AddCoffe = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const photo_url = form.file.value;

    const products = {
      name,
      supplier,
      category,
      chef,
      taste,
      price,
      photo_url,
    };
    // console.log(products);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
        console.log(products);
      });
  };
  return (
    <div className="bg-[url('/src/assets/more/11.png')]">
      <div className="max-w-screen-xl mx-auto">
        <Link to="/" className="flex items-center gap-2 py-12 md:px-5">
          <FaArrowLeftLong className="text-2xl" />

          <p className="text-3xl font-rancho text-[#374151] font  blur-[0.6px]">
            Back to home
          </p>
        </Link>
        <div className="bg-[#f4f3f0]">
          <div className="text-center">
            <h3 className="text-5xl font-rancho text-[#374151] blur-[0.6px] pt-[70px]">
              Add New Coffee
            </h3>
            <p className="text-lg font-raleway py-8 max-w-4xl mx-auto px-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipusm is that is has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div>
            <form
              onSubmit={handleAddCoffee}
              className="max-w-6xl mx-auto px-3 font-raleway space-y-7 pb-10"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className=" space-y-7">
                  <div>
                    <p className="text-2xl font-bold mb-3">Name</p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Coffee name"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-4">Supplier</p>
                    <input
                      type="text"
                      name="supplier"
                      placeholder="Enter Coffee supplier"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-4">Category</p>
                    <input
                      type="text"
                      name="category"
                      placeholder="Enter Coffee Category"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                </div>
                <div className=" space-y-7">
                  <div>
                    <p className="text-2xl font-bold mb-3">Chef</p>
                    <input
                      type="text"
                      name="chef"
                      placeholder="Enter Coffee chef"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-4">Taste</p>
                    <input
                      type="text"
                      name="taste"
                      placeholder="Enter Coffee taste"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>{" "}
                  <div>
                    <p className="text-2xl font-bold mb-4">Price</p>
                    <input
                      type="number"
                      name="price"
                      placeholder="Enter Coffee price"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold mb-4">Photo url</p>
                <input
                  type="text"
                  name="file"
                  className="p-3 text-lg font-semibold w-full rounded-md"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Add Coffee"
                  className="btn text-2xl font-rancho text-[#331a15] bg-[#d2b4bc]  hover:bg-[#d2b4bc]  hover:border-[#331a15]  w-full blur-[0.7px] rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffe;
