import bannerBg from "/image/banner.jpeg";

const Banner = () => {
    return (
        <section
            className="relative bg-center bg-no-repeat bg-cover h-[600px]"
            style={{ backgroundImage: `url(${bannerBg})` }}
        >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 className="text-4xl text-white py-2">
                    Would you like a Cup of Delicious Coffee?
                </h3>
                <p className="text-lg text-gray-300 py-2">
                    It&apos;s coffee time - Sip & Savor - Relaxation in every
                    sip! Get the nostalgia back!! <br /> Your companion of every
                    moment!!! Enjoy the beautiful moments and make them
                    memorable.
                </p>
                <button className="bg-primary border-2 border-primary hover:text-white hover:bg-transparent hover:border-white text-lg px-2 py-1 my-2">
                    Learn More
                </button>
            </div>
        </section>
    );
};

export default Banner;
