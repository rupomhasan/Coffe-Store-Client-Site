import { PiCoffeeFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";

const Coffees = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  console.log(coffees);

  const handdleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:5000/product/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          const newCoffees = coffees.filter((coffee) => coffee._id !== id);
          setCoffees(newCoffees);
        });
    });
  };

  return (
    <div className="my-20 bg-[url('/src/assets/more/1.png')] bg-cover">
      <div>
        <div className="space-y-5">
          <p className="text-center">- - Sip & Savor - -</p>
          <h3 className="font-rancho text-center text-6xl blur-[1px] text-[#331a15]">
            Our Popular Products
          </h3>
          <Link to="/addcoffe" className="flex justify-center">
            <button className="btn bg-[#e3b577] hover:bg-[#e3b577] text-2xl px-5 text-white font-rancho">
              Add Coffee
              <PiCoffeeFill />
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-screen-xl mx-auto">
          {coffees.map((coffee) => (
            <div key={coffee._id} className="md:flex  shadow-md p-2 rounded-md">
              <div className="grid grid-cols-3 gap-5 w-full items-center">
                <div className="col-span-2">
                  <img
                    className="max-h-[150px] w-full"
                    src={coffee.photo_url}
                    alt={coffee.name}
                  />
                </div>
                <div className="space-y-5">
                  <p>
                    Name : <span> {coffee.name} </span>
                  </p>
                  <p>
                    Chaf : <span> {coffee.chef} </span>
                  </p>
                  <p>
                    Price : <span>{coffee.price}</span>{" "}
                  </p>
                </div>
              </div>
              <div className="md:grid gap-4 space-x-2 md:space-x-0 p-2 ">
                <Link
                  to={`/coffee/${coffee._id}`}
                  className="badge p-3 bg-[#d2b4bc] rounded"
                >
                  <FaEye className="text-white text-xl hover:link" />
                </Link>
                <Link
                  to={`/update/${coffee._id}`}
                  className="badge p-3 bg-[#3c393b] rounded"
                >
                  <MdEdit className="text-white text-xl hover:link" />
                </Link>{" "}
                <p
                  onClick={() => handdleDelete(coffee._id)}
                  className="badge p-3 bg-[#eaa744] rounded"
                >
                  <MdDelete className="text-white text-xl hover:link" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffees;
