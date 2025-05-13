import Link from "next/link";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-black text-[#999999]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Section */}
          <div>
            <h1 className="font-bold text-[40px] text-[#3cb815]">
              Or<span className="text-[#f65005]">ganic</span> Farm
            </h1>
            <p className="mb-4">
              Chúng tôi mang đến những món ăn ngon và dịch vụ tuyệt vời. Hãy đến
              và trải nghiệm ẩm thực độc đáo tại Foody.
            </p>
            <div className="flex space-x-2 text-white">
              <Link href="#">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300"
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="ml-2 w-8 h-8 p-2 border rounded-full  hover:bg-white hover:text-black transition-all duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Địa chỉ</h4>
            <p className="flex items-center mb-2">
              <span className="mr-3">📍</span>
              123 Đường ABC, Hồ Chí Minh, Việt Nam
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
            <h4 className="text-xl font-semibold mb-4 text-white">
              Liên kết nhanh
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="self-center w-4 h-4 mr-2 "
                />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">
                  Về chúng tôi
                </span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="self-center w-4 h-4 mr-2 "
                />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">
                  Liên hệ
                </span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="self-center w-4 h-4 mr-2 "
                />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">
                  Dịch vụ của chúng tôi
                </span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="self-center w-4 h-4 mr-2 "
                />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">
                  Điều khoản & Điều kiện
                </span>
              </Link>
              <Link href="#" className="flex gap-1 group">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="self-center w-4 h-4 mr-2 "
                />
                <span className=" group-hover:text-white origin-left group-hover:scale-110 duration-300 transition-all">
                  Hỗ trợ
                </span>
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Bản tin</h4>
            <p className="mb-4">
              Đăng ký để nhận thông tin mới nhất về các món ăn và ưu đãi đặc
              biệt.
            </p>
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
                Đăng ký
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
              ©{" "}
              <Link href="#" className="hover:underline text-white">
                Tên Trang Web Của Bạn
              </Link>
              , Bảo lưu mọi quyền.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
