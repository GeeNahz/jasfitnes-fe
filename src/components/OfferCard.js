import { motion } from "framer-motion";
import sunset from "../img/card-top.jpg"


const OfferCard = () => {
    return (
        <div className="flex flex-col items-center text-center p-5 w-72 bg-zinc-800">
            <p className="uppercase text-white text-lg font-bold">Body building</p>
            <img src={sunset} alt="sunset" className="my-3 w-32 h-32" />
            <p className='text-white text-sm font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste nesciunt voluptate</p>
        </div>
    );
}
 
export default OfferCard;