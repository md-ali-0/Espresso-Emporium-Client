import headBg from '/header-bg.jpeg';
import logo from '/logo.png';

const Header = () => {
    return (
        <header className='bg-repeat bg-cover bg-center' style={{backgroundImage: `url(${headBg})`}}>
            <nav className='flex justify-center items-center py-2'>
                <img className='w-10' src={logo} alt="Espresso Emporium" />
                <h3 className='text-3xl text-white'>Espresso Emporium</h3>
            </nav>
        </header>
    );
};

export default Header;