import React from 'react';
import apple from "/assets/images/apple.svg";
import search from "/assets/images/search.svg";
import bag from "/assets/images/bag.svg";
import { navLists } from "../constants/index";


const NavBar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={apple} alt="Apple Icon" width={14} height={18} />

                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((list, index) => (
                        <div key={index} className="px-5 text-sm cursor-pointer text-gray transition-all hover:text-white">
                            {list}
                        </div>
                    ))}
                </div>
                <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
                    <img src={search} alt="Search Icon" width={18} height={18} />
                    <img src={bag} alt="Bucket Icon" width={18} height={18} />
                </div>

            </nav>


        </header>
    );
};

export default NavBar;