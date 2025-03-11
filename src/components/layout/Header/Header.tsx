"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faShoppingBag, faAngleDown, faUser,faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import DropdownMenu from './DropdownMenu';
import { productMenuItems, knowledgeMenuItems } from '../../../constants/homepage';
import { ROUTES } from '@/constants/routes';
import AuthModal from '@/components/auth/AuthModal';
import SearchBar from '@/components/common/SearchBar';


const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState<string[]>([]);

    const toggleSubMenu = (menuName: string) => {
        setOpenSubMenu((prev) => 
            prev.includes(menuName) 
            ? prev.filter(item => item !== menuName)
            : [...prev, menuName]
        )
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            {/* Top bar - sẽ ẩn khi scroll */}
            <div className={`hidden lg:block border-b border-[#d1d4da] px-12 transition-all duration-300 overflow-hidden ${
                isScrolled 
                ? 'h-0 transform -translate-y-full opacity-0' 
                : 'h-[44px] transform translate-y-0 opacity-100'
            }`}>
                <div className='flex gap-5 py-3.5'>
                    <small className='flex text-sm '>
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 me-2 self-center" />
                        123 Street, New York, USA
                    </small>
                    <small className='flex text-sm'>
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 me-2 self-center" />
                        info@example.com
                    </small>
                    <div className='flex gap-3 flex-1 justify-end'>
                        <small className='text-sm'>Follow us:</small>
                        <FontAwesomeIcon icon={faFacebook} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                        <FontAwesomeIcon icon={faTwitter} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                        <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 ml-2 self-center cursor-pointer hover:text-[#3cb815] transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main navigation */}
            <nav className={`flex px-4 lg:px-12 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
                <div className='flex'>
                    <Link href="/" className='text-[40px] self-center'>
                        <h1 className='font-bold text-[#3cb815]'>F
                            <span className='text-[#f65005]'>oo</span>
                            dy
                        </h1>
                    </Link>
                </div>

                <button 
                    className="lg:hidden ml-auto flex items-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <FontAwesomeIcon 
                        icon={isMobileMenuOpen ? faTimes : faBars} 
                        className="w-6 h-6 text-[#3cb815]"
                    />
                </button>

                {/* Desktop Menu */}
                <div className='hidden lg:flex flex-1 justify-end'>
                    <ul className='flex justify-end'>
                        <li className='py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.HOME}>Trang chủ</Link>
                        </li>
                        <li className='py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.ABOUT}>Giới thiệu</Link>
                        </li>
                        <li className='group relative py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.PRODUCTS}>Sản phẩm 
                            <FontAwesomeIcon icon={faAngleDown} className='w-4 h-4 inline-block ml-1'/></Link>
                            <DropdownMenu items={productMenuItems} />
                        </li>
                        <li className='group relative py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.KNOWLEDGE}>Kiến thức 
                            <FontAwesomeIcon icon={faAngleDown} className='w-4 h-4 inline-block ml-1'/></Link>
                            <DropdownMenu items={knowledgeMenuItems} />
                        </li>
                        <li className='py-[25px] px-[15px] hover:text-[#3cb815] transition-colors'>
                            <Link href={ROUTES.CONTACT}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>

                {/* Desktop Icons */}
                <div className='flex gap-3 ml-[24px]'>
                    <div className='self-center'>
                        <SearchBar />
                    </div>
                    <Link href="/gio-hang" className='self-center'>
                        <FontAwesomeIcon icon={faShoppingBag} className="hover:bg-[#3cb815]  p-2 bg-white rounded-full hover:text-white transition-all"/>
                    </Link>
                    <Link href="#" className='self-center' onClick={() => setAuthModalOpen(true)}>
                        <FontAwesomeIcon icon={faUser} className="bg-white p-2 rounded-full hover:bg-[#3cb815] hover:text-white transition-all"/>
                    </Link>

                    <AuthModal 
                        open={authModalOpen}
                        onClose={() => setAuthModalOpen(false)}
                    />
                </div>

                {/* Mobile Menu */}
                <div className={`
                    lg:hidden fixed top-[60px] left-0 w-full bg-white shadow-lg
                    transition-all duration-300 ease-in-out
                    ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>
                    <ul className='py-4'>
                        <li className='px-6 py-3 hover:bg-gray-50'>
                            <Link href={ROUTES.HOME}>Trang chủ</Link>
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50'>
                            <Link href={ROUTES.ABOUT}>Giới thiệu</Link>
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50'>
                            <div 
                                className="flex justify-between items-center"
                                onClick={() => toggleSubMenu('products')}
                            >
                                <Link href={ROUTES.PRODUCTS}>Sản phẩm</Link>
                                <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-300 ${
                                    openSubMenu.includes('products') ? 'rotate-180' : ''
                                }`}/>
                            </div>
                            {/* Submenu */}
                            <ul className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                                    openSubMenu.includes('products') 
                                        ? 'max-h-[500px] opacity-100' 
                                        : 'max-h-0 opacity-0'
                                }`}>
                                {productMenuItems.map((item, index) => (
                                    <li key={index} className="py-2">
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50'>
                            <div 
                                className="flex justify-between items-center"
                                onClick={() => toggleSubMenu('knowledge')}
                            >
                                <Link href={ROUTES.KNOWLEDGE}>Kiến thức</Link>
                                <FontAwesomeIcon icon={faAngleDown} className={`w-4 h-4 transition-transform duration-300 ${
                                    openSubMenu.includes('knowledge') ? 'rotate-180' : ''
                                }`}/>
                            </div>
                            {/* Submenu */}
                            <ul className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                                openSubMenu.includes('knowledge') 
                                    ? 'max-h-[500px] opacity-100' 
                                    : 'max-h-0 opacity-0'
                            }`}>
                                {knowledgeMenuItems.map((item, index) => (
                                    <li key={index} className="py-2">
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className='px-6 py-3 hover:bg-gray-50'>
                            <Link href={ROUTES.CONTACT}>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;