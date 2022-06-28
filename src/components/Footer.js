


const Footer = () => {
    return (
        <>
            <div className="footer w-full h-full bg-zinc-900 text-white flex flex-col-reverse justify-around items-center space-y-5 px-16 py-16 md:flex-row md:gap-5 md:h-80">
                <div className="w-56 space-y-3">
                    <div className="flex justify-start items-center space-x-3">
                        <i className="fa-solid fa-location-dot text-neonCarrot"></i><p className="text-xs md:text-sm">B242, Penthouse estate, Airport Rd, Lugbe</p>
                    </div>
                    <div className="flex justify-start items-center space-x-3">
                        <i className="fa-solid fa-phone text-neonCarrot"></i> <p>0811785442</p>
                    </div>
                    <div className="flex justify-start items-center space-x-9">
                        <i className="fa-brands fa-linkedin-in bg-neonCarrot rounded-full py-0.5 px-1 text-black text-xs"></i>
                        <i className="fa-brands fa-twitter bg-neonCarrot rounded-full py-0.5 px-1 text-black text-xs"></i>
                        <i className="fa-brands fa-facebook text-neonCarrot text-xl"></i>
                    </div>
                </div>
                <div>
                    <ul className="space-y-4 mb-10">
                        <p className="text-lg font-bold">Category</p>
                        <li className="text-xs lg:text-sm font-light capitalize" >First Link</li>   
                        <li className="text-xs lg:text-sm font-light capitalize" >Second Long Link</li>   
                        <li className="text-xs lg:text-sm font-light capitalize" >Third Link</li>   
                        <li className="text-xs lg:text-sm font-light capitalize" >Fourth Long Link</li>   
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <p className="text-lg font-bold">Category</p>
                        <li className="text-xs lg:text-sm font-light capitalize" >First Link</li>
                        <li className="text-xs lg:text-sm font-light capitalize" >Second Long Link</li>
                        <li className="text-xs lg:text-sm font-light capitalize" >Third Link</li>
                        <li className="text-xs lg:text-sm font-light capitalize" >Fourth Long Link</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-4">
                        <p className="text-lg font-bold">Category</p>
                        <li className="text-xs lg:text-sm font-light capitalize">First Link</li>
                        <li className="text-xs lg:text-sm font-light capitalize" >Second Long Link</li>
                        <li className="text-xs lg:text-sm font-light capitalize" >Third Link</li>
                        <li className="text-xs lg:text-sm font-light capitalize" >Fourth Long Link</li>
                    </ul>
                </div>
            </div>
            <div className="bg-black text-neonCarrot text-xs md:text-sm flex justify-center py-2">
                Copyright 2022 &copy; - All rights reserved
            </div>
        </>
    );
}
 
export default Footer;