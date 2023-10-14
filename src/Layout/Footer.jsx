import { BiLogoGmail, BiMap, BiSolidPhone } from "react-icons/bi";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { ImFacebook2, ImLinkedin } from "react-icons/im";
import footerBg from "/image/13.jpg";
import copyrightBg from "/image/24.jpg";
import logo from "/logo.png";

const Footer = () => {
    return (
        <footer
            className="bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${footerBg})` }}
        >
            <div className="container mx-auto pt-5 px-3 md:px-20">
                <div className="flex justify-between gap-2 md:gap-5">
                    <div className="w-full md:w-1/2">
                        <img
                            className="w-10"
                            src={logo}
                            alt="Espresso Emporium"
                        />
                        <h3 className="text-3xl text-dark_01 py-2">
                            Espresso Emporium
                        </h3>
                        <p className="text-xl py-2">
                            Always ready to be your friend. Come & Contact with
                            us to share your memorable moments, to share with
                            your best companion.
                        </p>
                        <div className="flex text-dark_01 gap-3 py-2">
                            <ImFacebook2 size={30}></ImFacebook2>
                            <FiTwitter size={30}></FiTwitter>
                            <FiInstagram size={30}></FiInstagram>
                            <ImLinkedin size={30}></ImLinkedin>
                        </div>
                        <div>
                            <h3 className="text-dark_01 text-3xl pt-5 pb-3">
                                Get in Touch
                            </h3>
                            <div>
                                <h4 className="text-dark_01 py-1">
                                    {" "}
                                    <BiSolidPhone
                                        className="inline"
                                        size={20}
                                    ></BiSolidPhone>{" "}
                                    <span className="text-lg">
                                        +88 01533 333 333
                                    </span>
                                </h4>
                                <h4 className="text-dark_01 py-1">
                                    {" "}
                                    <BiLogoGmail
                                        className="inline"
                                        size={20}
                                    ></BiLogoGmail>{" "}
                                    <span className="text-lg">
                                        info@gmail.com
                                    </span>
                                </h4>
                                <h4 className="text-dark_01 py-1">
                                    {" "}
                                    <BiMap
                                        className="inline"
                                        size={20}
                                    ></BiMap>{" "}
                                    <span className="text-lg">
                                        72, Wall street, King Road, Dhaka
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h3 className="text-dark_01 text-3xl pt-5 pb-3">
                            Connect with Us
                        </h3>
                        <input
                            className="block bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 my-2 w-full md:w-3/4"
                            type="text"
                            placeholder="Name"
                        />
                        <input
                            className="block bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 my-2 w-full md:w-3/4"
                            type="text"
                            placeholder="Email"
                        />
                        
                        <textarea
                            className="block bg-white rounded font-raleway focus:outline-none focus:ring-0 py-2 px-3 my-2 w-full md:w-3/4"
                            type="text"
                            placeholder="Message"
                            cols="20" rows="5"
                        />
                        <button className="border-2 rounded-3xl border-dark_01 text-dark_01 text-xl px-2 py-1 my-2">Send Message</button>
                    </div>
                </div>
            </div>
            <p
                className="bg-center bg-cover text-center text-lg text-white bg-no-repeat py-2"
                style={{ backgroundImage: `url(${copyrightBg})` }}
            >
                Copyright Espresso Emporium ! All Rights Reserved
            </p>
        </footer>
    );
};

export default Footer;
