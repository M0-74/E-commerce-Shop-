import React from 'react'
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BannerImage from '../../assets/women/women2.jpg'
const Banner = () => {
    return (
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 
                        gap-6 items-center">
                    {/* image section */}
                    <div className='' data-aos="zoom-in">
                        <img
                            className="max-w-[400px] h-[350px] object-cover w-full mx-auto 
                                   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                            src={BannerImage} alt="" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl sm:text-4xl font-bold">Winner Sale upto 70% Off</h1>
                        <p className="text-sm text-gray-500 tracking-wide leading-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iure possimus optio accusamus facilis quae obcaecati doloremque, officia, voluptate nostrum corrupti tempore earum recusandae? Officiis quae perferendis blanditiis velit quisquam!
                        </p>
                        <div className="flex flex-col gap-4">
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                <p>Quality Products</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                <p>Fast Delivery</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                <p>Easy Payment Method</p>
                            </div>
                            <div data-aos="fade-up" className="flex items-center gap-4">
                                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                                <p>Get Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner