"use client";

import React, { useEffect, useState, FC } from "react";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from './../../../public/logo.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
    const pathname = usePathname()

    // const [isScrolled, setIsScrolled] = useState(false);

    // const handleScroll = () => {
    //     if (window.scrollY > 1) {
    //         setIsScrolled(true);
    //         setIsMenuOpen(false)
    //     } else {
    //         setIsScrolled(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const headerClass = isScrolled ? 'header-section sticky-header' : 'header-section';

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const handleMenuToggle = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const headerClass = 'sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-75 bg-white transition-all duration-300';

    return (
        <>
            <header className={headerClass}>
                <div className="main-header py-5">
                    <div className="container mx-auto">
                        <div className="row">
                            <div className="col-12">
                                <div className="main-header-inner flex items-center justify-between">
                                    <div className="logo">
                                        <Link href="/">
                                            {/* <h1 className="text-xl font-bold text-gray-800">Logo</h1> */}
                                            <Image src={logo} alt="" />
                                        </Link>
                                        {/* <Link href="/">
                                            <h1 className="text-xl font-bold text-red-500">Logo Red</h1>
                                        </Link> */}
                                    </div>
                                    <div className="header-nav flex gap-5 items-center">
                                        {/* <button
                                            className="navbar-toggler p-3 bg-black md:hidden"
                                            onClick={handleMenuToggle}
                                        >
                                            <i className="fas fa-bars text-gray-800"></i>
                                        </button> */}


                                        <nav className="">
                                            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">

                                                {/* <button onClick={handleMenuToggle} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                                                    <span className="sr-only">Open main menu</span>
                                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                                    </svg>
                                                </button> */}
                                                <div className={`   hidden w-full md:block md:w-auto ${'navbar-collapse'} ${isMenuOpen ? 'block' : ''}`} id="navbarSupportedContent">
                                                    <ul className="font-medium flex items-center  gap-6">
                                                        <li className="flex items-center ">
                                                            <Link href={"/"} className="block text-11 text-black flex items-center" aria-current="page">Your Property <IoIosArrowForward /></Link>
                                                        </li>
                                                        <li>
                                                            <Link href={"/"} className="block text-11 text-black">For Developer</Link>
                                                        </li>
                                                        <li>
                                                            <Link href={"/"} className="block text-11 text-black">Invest</Link>
                                                        </li>
                                                        <li>
                                                            <Link href={"/"} className="block text-11 text-black">Off plan</Link>
                                                        </li>
                                                        <li className="flex items-center">
                                                            <Link href={"/"} className="block text-11 text-black flex items-center">Servies<IoIosArrowForward /></Link>
                                                        </li>
                                                        <li>
                                                            <Link href={"/"} className="block text-11 text-black">Content Hub</Link>
                                                        </li>
                                                        <li>
                                                            <Link href={"/"} className="block text-11 text-black">About us</Link>
                                                        </li>
                                                        <li className="group hover:bg-disable rounded-full mx-6" >
                                                            <Link href={"/"} className="block text-lg text-black h-8 w-8 flex items-center justify-center"><IoSettingsOutline className="group-hover:origin-center group-hover:rotate-45 transition  group-hover:duration-500	 " /></Link>
                                                        </li>
                                                        <li>
                                                        <button type="button" className="flex items-center justify-center p-3 bg-primary  text-11 text-white w-28 rounded">Invest Valuation</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                              
                                            </div>
                                        </nav>

                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;