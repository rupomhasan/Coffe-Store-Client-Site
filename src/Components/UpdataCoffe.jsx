import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from "sweetalert2";

import "../index.css";
const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { name, photo_url, chef, category, price, supplier, taste, _id } =
    coffee;

  const handleUpdateCoffee = (event, id) => {
    event.preventDefault();
    console.log(id);
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const photo_url = form.file.value;

    const updatedCoffee = {
      name,
      supplier,
      category,
      chef,
      taste,
      price,
      photo_url,
    };



    console.log(updatedCoffee);

    fetch(`http://localhost:5000/product/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Update has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
        console.log(updatedCoffee);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-[url('/src/assets/more/11.png')]">
      <div className="max-w-screen-xl mx-auto pb-28">
        <Link to="/" className="flex items-center gap-2 py-12 md:px-5">
          <FaArrowLeftLong className="text-2xl" />

          <p className="text-3xl font-rancho text-[#374151] font  blur-[0.6px]">
            Back to home
          </p>
        </Link>
        <div className="bg-[#f4f3f0]">
          <div className="text-center">
            <h3 className="text-5xl font-rancho text-[#374151] blur-[0.6px] pt-[70px]">
              Update Existing Coffee Details
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
              onSubmit={() => handleUpdateCoffee(event, _id)}
              className="max-w-6xl mx-auto px-3 font-raleway space-y-7 pb-10"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className=" space-y-7">
                  <div>
                    <p className="text-2xl font-bold mb-3">Name</p>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter Coffee name"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-4">Supplier</p>
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Enter Coffee supplier"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-4">Category</p>
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
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
                      defaultValue={chef}
                      placeholder="Enter Coffee chef"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-4">Taste</p>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter Coffee taste"
                      className="p-3 text-lg font-semibold w-full rounded-md"
                    />
                  </div>{" "}
                  <div>
                    <p className="text-2xl font-bold mb-4">Price</p>
                    <input
                      type="number"
                      name="price"
                      defaultValue={price}
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
                  defaultValue={photo_url}
                  className="p-3 text-lg font-semibold w-full rounded-md"
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Update Coffee Details"
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

export default UpdateCoffee;
