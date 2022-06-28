// import { motion } from "framer-motion";
// import sunset from "../images/card-top.jpg"


const OfferCard = ( props ) => {
    return (
        <div className="flex flex-col items-center text-center p-5 w-60 max-h-max h-72 md:w-72 bg-zinc-800">
            <p className="uppercase text-white text-lg font-bold">{ props.title }</p>
            {/* <img src={sunset} alt="sunset" className="my-3 w-32 h-32" /> */}
            <div className="w-32 h-32 my-3 fill-white">
                { props.svg }
            </div>
            <p className='text-white text-sm font-light'>{ props.body }</p>
        </div>
    );
}
 
export default OfferCard;