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
        <span>+90 384 214 1440</span>
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
        href="https://www.google.com/maps/place/Fadas+Travel/@38.628916,34.803883,15z/data=!4m2!3m1!1s0x0:0xa6e35f4a3d3e1fce?sa=X&ved=2ahUKEwjF4_SkudKCAxWxbvEDHU9yB6IQ_BJ6BAg8EAA"
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
