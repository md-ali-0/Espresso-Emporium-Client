import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
    const { createSignUp, createGoogleLogin, setLoading } =
        useContext(AuthContext);
    const navigate = useNavigate();
    const [err, setErr] = useState("");

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 8) {
            setErr("Password Must be Greater Then 8 Digit");
        }
        createSignUp(email, password)
            .then((result) => {
                console.log(result.user);
                const registerUser = result.user
                const user = { email, creationTime: registerUser.metadata?.creationTime }
                if (result.user) {
                    fetch("http://localhost:8080/user-add", {
                        method: "POST",
                        body: JSON.stringify(user),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            console.log(data);
                            toast.success("User Create Success");
                            navigate("/");
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((err) => {
                console.log(err);
                if (err.code === "auth/email-already-in-use") {
                    setErr("Email already Used");
                }
                setLoading(false);
            });
    };
    const handleGoogleLogin = () => {
        createGoogleLogin()
            .then((res) => console.log(res.user))
            .catch((err) => console.log(err.code));
    };
    return (
        <div className="flex flex-col items-center justify-center px-6 py-5 mx-auto my-10 lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-dark_01 md:text-3xl">
                        Register
                    </h1>
                    <form
                        className="space-y-4 md:space-y-6"
                        onSubmit={handleRegistration}
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-raleway mb-2 text-sm font-medium text-gray-900 "
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none sm:text-sm rounded-lg focus:ring-0 focus:border-primary font-raleway w-full p-2.5"
                                placeholder="Enter Email Address"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block font-raleway mb-2 text-sm font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="bg-gray-50 border focus:outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-0 focus:border-primary font-raleway w-full p-2.5"
                                placeholder="Enter Password"
                                required
                            />
                        </div>
                        {err ? (
                            <p className="text-red-600 text-center">{err}</p>
                        ) : (
                            ""
                        )}
                        <button
                            type="submit"
                            className="w-full font-raleway text-white bg-primary hover:bg-primary focus:outline-none focus:ring-0 font-medium rounded-lg text-lg px-5 py-2 text-center"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div>
                        <p className="text-center text-gray-700 text-sm pb-3">
                            Or
                        </p>
                        <div className="space-y-3">
                            <button
                                onClick={handleGoogleLogin}
                                className="w-full border border-gray-200 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2 text-center flex items-center justify-center font-raleway gap-2"
                            >
                                {" "}
                                <span className="text-3xl ">
                                    <FcGoogle size={20}></FcGoogle>
                                </span>{" "}
                                Sign Up With Google
                            </button>
                        </div>
                    </div>
                    <p className="text-lg font-light text-center text-dark_01">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-primary hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
