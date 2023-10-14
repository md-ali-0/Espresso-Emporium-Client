import iconOne from "/icons/1.png";
import iconTwo from "/icons/2.png";
import iconThree from "/icons/3.png";
import iconFour from "/icons/4.png";

const SectionCard = () => {
    return (
        <section className="bg-secondary">
            <div className="container mx-auto py-5 md:px-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    <div className="flex flex-col px-5 py-2">
                        <img className="w-16" src={iconOne} alt="" />
                        <h3 className="text-2xl">Awesome Aroma</h3>
                        <p className="text-lg">
                            You will definitely be a fan of the design & aroma
                            of your coffee
                        </p>
                    </div>
                    <div className="flex flex-col px-5 py-2">
                        <img className="w-16" src={iconTwo} alt="" />
                        <h3 className="text-2xl">High Quality</h3>
                        <p className="text-lg">
                            We served the coffee to you maintaining the best
                            quality
                        </p>
                    </div>
                    <div className="flex flex-col px-5 py-2">
                        <img className="w-16" src={iconThree} alt="" />
                        <h3 className="text-2xl">Pure Grades</h3>
                        <p className="text-lg">
                            The coffee is made of the green coffee beans which
                            you will love
                        </p>
                    </div>
                    <div className="flex flex-col px-5 py-2">
                        <img className="w-16" src={iconFour} alt="" />
                        <h3 className="text-2xl">Proper Roasting</h3>
                        <p className="text-lg">
                            Your coffee is brewed by first roasting the green
                            coffee beans
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionCard;
