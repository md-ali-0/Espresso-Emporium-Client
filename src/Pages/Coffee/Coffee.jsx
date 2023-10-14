import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";

const Coffee = () => {
    const coffee = useLoaderData();
    const { name, supplier, category, photo, chef, taste, details } = coffee;
    return (
        <div className="container mx-auto px-3 md:px-20 py-5">
            <Link
                to="/"
                className="text-xl text-slate-700 items-center flex gap-2 py-2"
            >
                <FiArrowLeft></FiArrowLeft>{" "}
                <span className="text-2xl">Back to home</span>
            </Link>
            <div className="bg-product_bg rounded p-5">
                <div className="flex justify-evenly items-center gap-2">
                    <img src={photo} alt={name} />
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-3xl text-dark_01 py-3">{name}</h3>
                        <h3 className="font-raleway">
                            <span className="font-bold">Name:</span> {name}
                        </h3>
                        <h3 className="font-raleway">
                            <span className="font-bold">Supplier:</span> {supplier}
                        </h3>
                        <h3 className="font-raleway">
                            <span className="font-bold">Category:</span> {category}
                        </h3>
                        <h3 className="font-raleway">
                            <span className="font-bold">Chef:</span> {chef}
                        </h3>
                        <h3 className="font-raleway">
                            <span className="font-bold">Taste:</span> {taste}
                        </h3>
                        <h3 className="font-raleway">
                            <span className="font-bold">Details:</span> {details}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;
