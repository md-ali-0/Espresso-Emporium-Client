import CoffeeCard from "../Coffee/CoffeeCard";
import Banner from "./Banner";
import SectionCard from "./SectionCard";
import coffeBg from '/image/1.png';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <SectionCard></SectionCard>
            <section className="bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${coffeBg})`}}>
                <div className="flex flex-col justify-center items-center py-5">
                    <p>--- Sip & Savor ---</p>
                    <h3 className="text-dark_01 text-4xl">Our Popular Products</h3>
                    <button className="bg-primary hover:bg-gray-100 hover:text-gray-500 text-gray-100 rounded-md border-2 border-dark_01 px-3 py-1 my-2">Add Coffee</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <CoffeeCard></CoffeeCard>
                </div>
            </section>
        </main>
    );
};

export default Home;
