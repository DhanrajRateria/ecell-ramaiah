import dynamic from 'next/dynamic';
import Link from 'next/link';

const Image = dynamic(() => import("next/image"));

const Footer = () => {
  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="footer text-white py-6">
      <div className="flex justify-center items-center mb-6">
        <Image src="/images/logo.png" alt="Logo" className="h-12 mr-8" width={100} height={50} />
        <Image src="/images/msrit.png" alt="Ramaiah Institute of Technology" className="h-12" width={150} height={50}/>
      </div>
      <p className="text-center my-4">Follow us on social media to stay updated with the latest news and events..!!</p>
      <div className="flex justify-center items-center mb-4 social-icons">
        <button onClick={() => handleSocialMediaClick('https://www.facebook.com/')}>
          <Image src="/images/social_icons/facebook.png" alt="Facebook" className="h-10 w-10" width={40} height={40} layout="responsive"/>
        </button>
        <button onClick={() => handleSocialMediaClick('https://www.linkedin.com/in/edcrit/')}>
          <Image src="/images/social_icons/linkedin.png" alt="LinkedIn" className="h-10 w-10" width={40} height={40} layout="responsive"/>
        </button>
        <button onClick={() => handleSocialMediaClick('https://www.instagram.com/ecell_ramaiah')}>
          <Image src="/images/social_icons/instagram.png" alt="Instagram" className="h-10 w-10" width={40} height={40} layout="responsive"/>
        </button>
      </div>
      <p className="text-center mt-4 text-gray-500">&copy; {new Date().getFullYear()} E-Cell Ramaiah. All rights reserved.</p>
    </footer>
  );
};

export default Footer;