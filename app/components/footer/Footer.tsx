import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h1 className="title-font font-medium tracking-widest text-2xl mb-3 font-mono">
                            ABOUT US
                        </h1>
                        <nav className="list-none mb-4">
                            <ul>
                                <li>
                                    <a className="text-gray-300 hover:text-white text-2xl">Address - </a>
                                </li>
                                <li className="mt-1">
                                    <a className="text-gray-300 hover:text-white ">Shop No-5, Windsor St, Vaibhav Khand, Indirapuram, Ghaziabad, Uttar Pradesh 201014</a>
                                </li>
                                <li className="mt-5">
                                    <a className="text-gray-300 hover:text-white text-2xl">Phone</a>
                                </li>
                                <li className="mt-1">
                                    <a href="tel:+919319313831" className="text-gray-300 hover:text-white ">+9193193 13831</a>
                                </li>
                            </ul>
                        </nav>

                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h1 className="title-font font-medium tracking-widest text-2xl mb-3 font-mono">
                            SOCIAL MEDIA
                        </h1>
                        <nav className="list-none mb-4">
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <div>
                                        <a href="https://facebook.com" className="text-gray-300 hover:text-white flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                                            <FaFacebook size={30} color="#fffff" />
                                            <span>Facebook</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://www.instagram.com/thechawlastandoorijunction?igsh=cTlkcWl1NDFiNWV3" className="text-gray-300 hover:text-white flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram size={30} color="#E4405F" />
                                            <span>Instagram</span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="https://www.youtube.com/c/ChawlasTandooriJunction" className="text-gray-300 hover:text-white flex items-center space-x-2" target="_blank" rel="noopener noreferrer">
                                            <FaYoutube size={30} color="#FF0000" />
                                            <span>YouTube</span>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h1 className="title-font font-medium tracking-widest text-2xl mb-3 font-mono">
                            OPENING HOURS
                        </h1>
                        <nav className="list-none mb-4">
                            <ul className="flex flex-col space-y-1">
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Monday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Tuesday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Wednesday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Thursday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Friday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Saturday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <a className="text-gray-300 hover:text-white ">Sunday</a>
                                    <span className="text-gray-300 hover:text-white ">10:00 AM - 11:59 PM</span>
                                </li>
                            </ul>
                        </nav>


                    </div>

                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 mx-auto">
                        <h2 className="title-font font-medium tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                        <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between items-center">
                            <div className=" relative w-full sm:w-auto mb-4 xl:mb-0 space-y-5">
                                <p className="text-sm text-gray-500 text-center sm:text-left">
                                    Send an email to <strong>chawlasofficial@gmail.com</strong>
                                </p>
                                <a
                                    href="mailto:chawlasofficial@gmail.com?subject=Subscription Request&body=I would like to subscribe!"
                                    className=" flex-shrink-0 inline-flex justify-center text-white bg-red-500 border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded mt-4 sm:mt-0"
                                >
                                    Subscribe
                                </a>
                            </div>

                        </div>
                        <div className="mt-4 flex justify-center">
                            <img src="/logo.png" alt="Chawala's Tandoori" className="w-1/2 sm:w-1/3 lg:w-48" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-gray-900">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="ml-3 text-xl"></span>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
                        © {new Date().getFullYear()}  —
                        <a href="#" className="text-gray-400 ml-1" target="_blank" rel="noopener noreferrer">
                            @CHAWALA'S TANDOORI
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        {["facebook", "twitter", "instagram", "linkedin"].map((platform, i) => (
                            <a key={i} className="ml-3 text-gray-400 hover:text-white">
                                <i className={`fab fa-${platform} text-xl`}></i>
                            </a>
                        ))}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
