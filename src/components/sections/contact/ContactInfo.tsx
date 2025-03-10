import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const ContactInfo = () => {
  return (
    <div className="wow fadeInUp bg-[#3cb815] text-white flex flex-col justify-center h-full p-8 rounded-lg" data-wow-delay="0.1s">
      <div className="space-y-8">
        <div>
          <h5 className="text-xl font-semibold mb-2">Call Us</h5>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mr-3" />
            +012 345 67890
          </p>
        </div>

        <div>
          <h5 className="text-xl font-semibold mb-2">Email Us</h5>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-3" />
            info@example.com
          </p>
        </div>

        <div>
          <h5 className="text-xl font-semibold mb-2">Office Address</h5>
          <p className="flex items-center">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-3" />
            123 Street, New York, USA
          </p>
        </div>

        <div>
          <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
          <div className="flex space-x-2">
            {[
              { icon: faTwitter, href: '#' },
              { icon: faFacebookF, href: '#' },
              { icon: faYoutube, href: '#' },
              { icon: faLinkedinIn, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-[#3cb815] transition-colors"
              >
                <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;