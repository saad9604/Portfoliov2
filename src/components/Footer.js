import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto text-center">
                <p className="text-lg mb-4">sayyedsaad9604@gmail.com</p>
                <p className="text-sm">&copy; {new Date().getFullYear()} Saad. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
