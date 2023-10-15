import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import CoffeeCard from "../Coffee/CoffeeCard";
import Banner from "./Banner";
import InstagramFollow from "./InstagramFollow";
import SectionCard from "./SectionCard";
import coffeBg from "/image/1.png";

const Home = () => {
    const loadCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadCoffees)

    const coffeeDelete = (_id) => {
        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            })
            .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    fetch(`http://localhost:8080/coffee-delete/${_id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            if (data.deletedCount) {
                                Swal.fire(
                                    "Deleted!",
                                    "Your file has been deleted.",
                                    "success"
                                );
                                const newCoffee = loadCoffees.filter(coffee=>coffee._id !== _id)
                                setCoffees(newCoffee)
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    {
                        Swal.fire(
                          'Cancelled',
                          'Your imaginary file is safe :)',
                          'error'
                        )
                      }
                }
            });
    };
    return (
        <main>
            <Banner></Banner>
            <SectionCard></SectionCard>
            <section
                className="bg-center bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${coffeBg})` }}
            >
                <div className="container mx-auto py-2 md:px-20">
                    <div className="flex flex-col justify-center items-center py-5">
                        <p>--- Sip & Savor ---</p>
                        <h3 className="text-dark_01 text-4xl">
                            Our Popular Products
                        </h3>
                        <Link
                            to="/coffee-add"
                            className="bg-primary hover:bg-gray-100 hover:text-gray-500 text-gray-100 rounded-md border-2 border-dark_01 px-3 py-1 my-2"
                        >
                            Add Coffee
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {coffees.map((coffee) => (
                            <CoffeeCard
                                key={coffee._id}
                                coffee={coffee}
                                coffeeDelete={coffeeDelete}
                            ></CoffeeCard>
                        ))}
                    </div>
                </div>
            </section>
            <InstagramFollow></InstagramFollow>
        </main>
    );
};

export default Home;
