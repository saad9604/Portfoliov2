import React from 'react';

const ContactUs = () => {
    const handleEmailClick = () => {
        const subject = encodeURIComponent('Inquiry from Your Portfolio Website'); 
        const email = 'sayyedsaad9604@gmail.com'; 
        const mailtoLink = `mailto:${email}?subject=${subject}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className="bg-gray-50 py-16">
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
            </div>
        </div>
    );
};

export default ContactUs;
