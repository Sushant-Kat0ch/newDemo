import React from "react";
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="footer-section bg-black text-white">
            <div className="contact">
                <div className="container mx-auto py-8 px-4 lg:px-0">
                    <div className="flex flex-row justify-between py-12">
                        <div className="left flex flex-col justify-between w-full px-12">
                            <h2 className="text-5xl font-bold">Speak to an <br /> agent today</h2>
                            <p>Sign up for our weekly newsletter <br /> for market updates!</p>
                        </div>
                        <div className="right w-full px-12">
                            <form action="" method="POST">
                                <div className="columns-2">
                                    <div className="mb-4">
                                        <input type="text" id="name" name="name" placeholder="John Doe" required
                                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" id="name" name="name" placeholder="John Doe" required
                                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                                    </div>
                                </div>
                                <div className="columns-2">
                                    <div className="mb-4">
                                        <input type="text" id="name" name="name" placeholder="John Doe" required
                                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                                    </div>
                                    <div className="mb-4">
                                        <input type="text" id="name" name="name" placeholder="John Doe" required
                                            className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea id="message" name="message" placeholder="How can we help you?" required
                                        className="w-full px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"></textarea>
                                </div>
                                <button type="button" className="px-6 w-full py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-main ">
                <div className="container mx-auto py-8 px-4 lg:px-0 border-y border-white">
                    <div className="columns-9">
                        <div className="footer-nav flex flex-col">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-nav">
                            <h4 className="font-normal text-sm mb-4">Navigation</h4>
                            <ul className="flex flex-col">
                                <li><Link href="/" className="hover:text-gray-400 text-xs font-light">Home</Link></li>
                                <li><Link href="/about" className="hover:text-gray-400 text-xs font-light">About</Link></li>
                                <li><Link href="/contact" className="hover:text-gray-400 text-xs font-light">Contact us</Link></li>
                                <li><Link href="/privacy-policy" className="hover:text-gray-400 text-xs font-light">Privacy Policy</Link></li>
                                <li><Link href="javascript:void(0);" className="hover:text-gray-400 text-xs font-light">Terms & Conditions</Link></li>
                                <li><Link href="/blog" className="hover:text-gray-400 text-xs font-light">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact copyright">
                <div className="container mx-auto py-8 px-4 lg:px-0 columns-3">
                    <div className="w-full md:text-left md:mb-0 mb-8">
                        <p className="text-xs text-gray-400 md:text-sm">Call us : 000 0000 0000</p>
                    </div>
                    <div className="w-full md:text-center md:mb-0 mb-8">
                        <ul className="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            <li className="mx-4"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:text-right md:mb-0 mb-8">
                        <p className="text-xs text-gray-400 md:text-sm">Copyright 2020 &copy; All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;