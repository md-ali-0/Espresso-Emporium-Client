import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import addCoffeeBg from "/image/11.png";

const CofeeUpdate = () => {
    const coffee = useLoaderData();
    const { _id, name, supplier, category, photo, chef, taste, details } = coffee;

    const coffeeUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const updateCoffee = {
            name,
            supplier,
            category,
            photo,
            chef,
            taste,
            details,
        };
        fetch(`http://localhost:8080/coffee-edit/${_id}`,{
            method: "PUT",
            body: JSON.stringify(updateCoffee),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.modifiedCount) {
                toast.success('Coffee Updated Successfully!');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    };
    return (
        <div className="" style={{ backgroundImage: `url(${addCoffeeBg})` }}>
            <div className="container mx-auto px-3 md:px-20 py-5">
                <Link
                    to="/"
                    className="text-xl text-slate-700 items-center flex gap-2 py-2"
                >
                    {" "}
                    <FiArrowLeft></FiArrowLeft>{" "}
                    <span className="text-2xl">Back to home</span>
                </Link>
                <div className="bg-product_bg rounded p-5">
                    <h3 className="text-3xl text-center py-2">
                        Update Existing Coffee Details
                    </h3>
                    <p className="text-lg text-center md:px-20">
                        It is a long established fact that a reader will be
                        distraceted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <form onSubmit={coffeeUpdate}>
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="w-full md:w-1/2">
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter coffee name"
                                        defaultValue={name}
                                    />
                                </div>
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="supplier"
                                    >
                                        Supplier
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="supplier"
                                        id="supplier"
                                        placeholder="Enter coffee supplier"
                                        defaultValue={supplier}
                                    />
                                </div>
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="category"
                                    >
                                        Category
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="category"
                                        id="category"
                                        placeholder="Enter coffee category"
                                        defaultValue={category}
                                    />
                                </div>
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="photo"
                                    >
                                        Photo
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="photo"
                                        id="photo"
                                        placeholder="Enter coffee photo url"
                                        defaultValue={photo}
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="chef"
                                    >
                                        Chef
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="chef"
                                        id="chef"
                                        placeholder="Enter coffee chef"
                                        defaultValue={chef}
                                    />
                                </div>
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="taste"
                                    >
                                        Taste
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="taste"
                                        id="taste"
                                        placeholder="Enter coffee taste"
                                        defaultValue={taste}
                                    />
                                </div>
                                <div className="py-2">
                                    <label
                                        className="block text-lg text-gray-700 font-raleway font-medium py-1"
                                        htmlFor="details"
                                    >
                                        Details
                                    </label>
                                    <input
                                        className="bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 w-full"
                                        type="text"
                                        name="details"
                                        id="details"
                                        placeholder="Enter coffee details"
                                        defaultValue={details}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary hover:bg-gray-100 hover:text-gray-500 text-gray-800 rounded-md border-2 border-dark_01 px-3 py-1 my-2 w-full"
                        >
                            Update Coffee
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default CofeeUpdate;
