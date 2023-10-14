import cup2 from "/cups/Rectangle 10.png";
import cup3 from "/cups/Rectangle 11.png";
import cup4 from "/cups/Rectangle 12.png";
import cup5 from "/cups/Rectangle 13.png";
import cup6 from "/cups/Rectangle 14.png";
import cup7 from "/cups/Rectangle 15.png";
import cup8 from "/cups/Rectangle 16.png";
import cup1 from "/cups/Rectangle 9.png";

const InstagramFollow = () => {
    return (
        <section className="container mx-auto py-5 md:px-20">
            <div className="flex flex-col justify-center items-center py-5">
                <p>--- Follow Us Now ---</p>
                <h3 className="text-dark_01 text-4xl">Follow on Instagram</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-3">
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </section>
    );
};

export default InstagramFollow;
