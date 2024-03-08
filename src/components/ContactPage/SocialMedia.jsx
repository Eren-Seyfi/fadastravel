import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const ContactSocialMedia = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Follow us on social media..</h1>
      <div className="flex items-center justify-start gap-3">
        {/* Facebook Button */}
        <a
          href="https://www.facebook.com/fadastravel"
          className="w-10 h-10 border border-red-500 hover:bg-[#3C81C1] flex justify-center items-center group"
        >
          <SiFacebook className="text-red-500 group-hover:text-white text-xl" />
        </a>
        {/* Youtube Button */}
        <a
          href="https://www.youtube.com/channel/UCUblskJ-DnRU9qyvye8JS3Q"
          className="w-10 h-10 border border-red-500 hover:bg-[#3C81C1] flex justify-center items-center group"
        >
          <FaYoutube className="text-red-500 group-hover:text-white text-xl" />
        </a>
        {/* Instagram Button */}
        <a
          href="https://www.instagram.com/fadastravel/"
          className="w-10 h-10 border border-red-500 hover:bg-[#3C81C1] flex justify-center items-center group"
        >
          <FaInstagram className="text-red-500 group-hover:text-white text-xl" />
        </a>
      </div>
    </div>
  );
};
export default ContactSocialMedia;
