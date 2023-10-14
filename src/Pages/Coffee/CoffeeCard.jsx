import PropTypes from 'prop-types';
import { BiPencil, BiTrash } from 'react-icons/bi';
import { FiEye } from "react-icons/fi";
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffeeDelete }) => {
    const { _id, name, photo, chef, taste } = coffee;
    return (
        <div className="bg-product_bg rounded-md py-2 px-3">
            <div className='flex justify-between items-center gap-2'>
                <img className='w-36' src={photo} alt={name} />
                <div className='flex flex-col justify-center items-start'>
                    <h3 className='font-raleway'><span className='font-bold'>Name:</span> {name}</h3>
                    <h3 className='font-raleway'><span className='font-bold'>Chef:</span> {chef}</h3>
                    <h3 className='font-raleway'><span className='font-bold'>Taste:</span> {taste}</h3>
                </div>
                <div className='flex flex-col gap-2 pr-5'>
                    <Link to={`/coffee/${_id}`} className='bg-primary text-white rounded py-1 px-2'><FiEye className='inline'></FiEye></Link>
                    <Link to={`/coffee-edit/${_id}`} className='bg-gray-800 text-white rounded py-1 px-2'><BiPencil className='inline'></BiPencil></Link>
                    <button onClick={()=>coffeeDelete(_id)} className='bg-red-500 text-white rounded py-1 px-2'><BiTrash className='inline'></BiTrash></button>
                </div>
            </div>
        </div>
    );
};
CoffeeCard.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffeeDelete: PropTypes.func.isRequired,
}
export default CoffeeCard;
