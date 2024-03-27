import React from 'react';
import Image from "next/image";

const Footer = () => {
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/edcrit/', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/ecell_ramaiah', '_blank');
    };
    
    return (
        <footer className="text-white py-12">
            <div className="flex justify-center items-center mb-8">
                <Image src="/images/logo.png" alt="Logo" className="h-12 mr-8" width={100} height = {500}/>
                <Image src="/images/msrit.png" alt="Ramaiah Institute of Technology" className="h-12" width={150} height = {500}/>
            </div>
            <p className="text-center my-6">Follow us on social media to stay updated with the latest news and events..!!</p>
            <div className="flex justify-center items-center mb-6">
                <button onClick={handleFacebookClick} className="mr-6">
                    <Image src="/images/social_icons/facebook.png" alt="Facebook" className="h-10 w-10" width={100} height = {400}/>
                </button>
                <button onClick={handleLinkedinClick} className="mr-6">
                    <Image src="/images/social_icons/linkedin.png" alt="LinkedIn" className="h-10 w-10" width={100} height = {400}/>
                </button>
                <button onClick={handleInstagramClick}>
                    <Image src="/images/social_icons/instagram.png" alt="Instagram" className="h-10 w-10" width={100} height = {400}/>
                </button>
            </div>
            <p className="text-center mt-6 text-gray-500">&copy; {new Date().getFullYear()} E-Cell Ramaiah. All rights reserved.</p>
        </footer>
    );
};

export default Footer;