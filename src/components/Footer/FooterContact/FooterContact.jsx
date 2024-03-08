import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
const FooterContact = () => {
  return (
    <section>
      <a
        className="flex items-center justify-center md:justify-start space-x-4 text-white font-bold text-lg group md:hover:text-red-400"
        href="tel:+903842141440"
      >
        <FaPhone className="text-red-400 md:text-white md:group-hover:text-red-400" />
        <span>+90 538 216 2785</span>
      </a>
      <a
        className="flex items-center justify-center md:justify-start space-x-4 text-white font-bold text-lg group md:hover:text-red-400"
        href="mailto:info@fadastravel.com"
      >
        <IoMdMail className="text-red-400 md:text-white md:group-hover:text-red-400 " />
        <span>info@fadastravel.com</span>
      </a>
      <a
        className="flex items-center justify-center space-x-4 text-white font-bold text-lg group md:hover:text-red-400"
        href="https://maps.app.goo.gl/WN3uSwyaWeAnLozp7"
      >
        <FaLocationDot className="text-red-400 md:text-white md:group-hover:text-red-400 text-2xl md:text-xl" />
        <span className="text-center md:text-start m-0 p-0">
          Yukarı Mahalle, Fatih Caddesi, No:11 BC Uçhisar/Nevşehir/Türkiye
        </span>
      </a>
    </section>
  );
};
export default FooterContact;
