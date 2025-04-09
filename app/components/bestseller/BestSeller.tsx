import React  from "react";

const BestSeller = () => {
    // Best Sellers Data
    const vegItems = [
        { name: "Paneer Tikka", img: "/1.png" },
        { name: "Veg Seekh Kebab", img: "/Veg Kebab.png" },
        { name: "Stuffed Paneer Tikka", img: "/stuffedpaneertikka.png" },
        { name: "Veg Hara Bhara Kebab", img: "/Veg Hara Bhara Kebab.png" },
    ];

    const nonVegItems = [
        { name: "Chicken Tikka", img: "/chicken tikka.png" },
        { name: "Mutton Seekh Kebab", img: "/mutton seekh kebab.png" },
        { name: "Tandoori Chicken", img: "/3.png" },
        { name: "Chicken Malai Tikka", img: "/Malai Chicken tikka.png" },
    ];

    return (
        <div className="bg-gray-50 px-4 py-10 sm:px-8 lg:px-16">
            {/* Title Section */}
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">Best Seller</h1>
                <hr className="border-t-2 border-gray-300 my-4 mx-auto w-1/3" />
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">The Chawala&apos;s Tandoori Junction</h2>
            </div>

            {/* Grid Layout for Items */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 ">
                {/* Veg Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-700 text-center">Veg</h2>
                    {vegItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg mr-4 sm:mr-6"
                            />
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">{item.name}</h3>
                                <hr className="border-t-2 border-gray-300 my-2" />
                                <p className="text-gray-600 text-sm sm:text-base">The Chawala Tandoori Junction</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Non-Veg Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-red-700 text-center">Non-Veg</h2>
                    {nonVegItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg mr-4 sm:mr-6"
                            />
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold text-gray-800">{item.name}</h3>
                                <hr className="border-t-2 border-gray-300 my-2" />
                                <p className="text-gray-600 text-sm sm:text-base">The Chawala Tandoori Junction</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
