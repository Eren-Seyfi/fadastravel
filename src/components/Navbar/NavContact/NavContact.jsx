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
          href="tel:+902038420214201440"
        >
          <FaPhone />
          <span>+90 384 214 1440</span>
        </a>
        <a
          className="nav-content-contact-information-items "
          href="mailto:info@fadastravel.com"
        >
          <IoMdMail />
          <span>info@fadastravel.com</span>
        </a>
        <a
          className="nav-content-contact-information-items "
          href="https://www.google.com/maps/place/Fadas+Travel/@38.628916,34.803883,15z/data=!4m2!3m1!1s0x0:0xa6e35f4a3d3e1fce?sa=X&ved=2ahUKEwjF4_SkudKCAxWxbvEDHU9yB6IQ_BJ6BAg8EAA"
        >
          <FaLocationDot />
          <span>
            Yukarı Mahalle, Fatih Caddesi, No:11 BC Uçhisar/Nevşehir/Türkiye
          </span>
        </a>
      </div>
      {/* Sosyalmeda Bilgileri */}
      <div className="flex items-center gap-5">
        <a href="http://wa.me/+905382162785" className="nav-content-social-media-information-items">
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
