import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <section id='contact' className="text-gray-600 body-font relative">
            {/* Map background */}
            <div className="absolute inset-0 bg-gray-300">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=The+Chawla%27s+Tandoori+Junction,+Shop+No-5,+Windsor+St,+Vaibhav+Khand,+Indirapuram,+Ghaziabad,+Uttar+Pradesh+201014+28.638716719705265,77.36643020409902&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                ></iframe>

            </div>

            <div className="container px-5 py-24 mx-auto flex">
                <motion.div
                    className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                        Feedback
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">
                        We'd love to hear from you. Please share your thoughts!
                    </p>

                    {/* Email Input */}
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <motion.a
                        href="mailto:your-email@example.com?subject=Subject Text&body=Body of the email"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Submit
                    </motion.a>


                    <p className="text-xs text-gray-500 mt-3">
                        Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactUs;
