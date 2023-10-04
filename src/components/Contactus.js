import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';
const ContactUs = () => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };
    const [isEmailFormVisible, setIsEmailFormVisible] = useState(false);

    const handleEmailClick = () => {
        setIsEmailFormVisible(!isEmailFormVisible);
    };
    return (
        <InView triggerOnce>
            {({ inView, ref }) => (
                <div
                    ref={ref}
                    className={`bg-gray-50 py-16 ${inView ? 'animate-fadeIn' : ''}`}
                >
                    <motion.div
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
                    >
                        <div className="container mx-auto text-center">
                            <h2 className="text-3xl font-extrabold text-blue-500 mb-8">Contact Us</h2>
                            <p className="text-[22px] text-gray-600 mb-8 name font-extrabold">
                                Have a question or want to work together? Feel free to reach out to us.
                            </p>
                            <button
                                onClick={handleEmailClick}
                                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-semibold text-lg focus:outline-none"
                            >
                                Email Us
                            </button>
                            {/* Your email form components go here */}
                        </div>
                    </motion.div>
                </div>
            )}
        </InView>
    );
};

export default ContactUs;
