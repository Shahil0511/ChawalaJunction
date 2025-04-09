import React from 'react';

const Gallery: React.FC = () => {
    return (
        <section id='gallery' className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
                        Chawala Tandoori Junction - A Flavorful Journey
                    </h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                        Experience the finest tandoori dishes with authentic flavors, prepared fresh with love and passion. From our succulent kebabs to mouthwatering curries, every bite tells a story.
                    </p>

                </div>

                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/500x300.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/501x301.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src="/601x361.png"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full md:w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img
                                alt="gallery"
                                className="w-full h-full object-cover object-center block"
                                src="600x360.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/502x302.png"
                            />
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img
                                alt="gallery"
                                className="w-full object-cover h-full object-center block"
                                src="/503x303.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
