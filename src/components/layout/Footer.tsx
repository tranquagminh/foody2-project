import Link from 'next/link';
import { faFacebook, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-black text-[#999999]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h1 className='font-bold text-[40px] text-[#3cb815]'>F 
                <span className='text-[#f65005]'>oo</span>
                dy
            </h1>
            <p className="mb-4">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="flex space-x-2 text-white">
              <Link href="#">
                <FontAwesomeIcon icon={faTwitter} className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300" />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faFacebook} className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300" />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faYoutube} className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300" />
              </Link>
              <Link href="#">
                <FontAwesomeIcon icon={faLinkedin} className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300" />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Address</h4>
            <p className="flex items-center mb-2">
              <span className="mr-3">📍</span>
              123 Street, New York, USA
            </p>
            <p className="flex items-center mb-2">
              <span className="mr-3">📞</span>
              +012 345 67890
            </p>
            <p className="flex items-center">
              <span className="mr-3">✉️</span>
              info@example.com
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon icon={faAngleRight} className="self-center w-4 h-4 mr-2 " />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">About Us</span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon icon={faAngleRight} className="self-center w-4 h-4 mr-2 " />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">Contact Us</span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon icon={faAngleRight} className="self-center w-4 h-4 mr-2 " />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">Our Services</span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon icon={faAngleRight} className="self-center w-4 h-4 mr-2 " />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">Terms & Condition</span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon icon={faAngleRight} className="self-center w-4 h-4 mr-2 " />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">Support</span>
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Newsletter</h4>
            <p className="mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Your email" 
                className="w-full py-3 px-4 bg-transparent border border-gray-600 rounded-md text-white focus:outline-none focus:border-[#3cb815] focus:ring-1 focus:ring-[#3cb815] transition-all duration-300"
              />
              <button 
                type="button" 
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#3cb815] text-white py-2 px-4 rounded hover:bg-[#2f9010] transition-colors duration-300"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center text-center md:text-left">
            <div className="mb-2 md:mb-0">
              © <Link href="#" className="hover:underline text-white">Your Site Name</Link>, All Right Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;