import {
  FaPhone,
  FaLocationDot,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const NavContact = () => {
  return (
    <div className="nav-content">
      {/* İletişim bilgileri */}
      <div className="nav-content-contact-information">
        <a
          className="nav-content-contact-information-items "
          href="tel:+905382162785"
        >
          <FaPhone />
          <span className="text-xs font-poppins">+90 538 216 2785</span>
        </a>
        <a
          className="nav-content-contact-information-items "
          href="mailto:info@fadastravel.com"
        >
          <IoMdMail />
          <span className="text-xs font-poppins">info@fadastravel.com</span>
        </a>
        <a
          className="nav-content-contact-information-items "
          href="https://maps.app.goo.gl/WN3uSwyaWeAnLozp7"
        >
          <FaLocationDot />
          <span className="text-xs font-poppins">
            Yukarı Mahalle, Fatih Caddesi, No:11 BC Uçhisar/Nevşehir/Türkiye
          </span>
        </a>
      </div>
      {/* Sosyalmeda Bilgileri */}
      <div className="flex items-center gap-5 ">
        <a
          href="http://wa.me/+905382162785"
          className="nav-content-social-media-information-items"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.facebook.com/fadastravel"
          className="nav-content-social-media-information-items"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.youtube.com/channel/UCUblskJ-DnRU9qyvye8JS3Q"
          className="nav-content-social-media-information-items"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.instagram.com/fadastravel/"
          className="nav-content-social-media-information-items"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/fadas-travel-health-tourism/"
          className="nav-content-social-media-information-items"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};
export default NavContact;
