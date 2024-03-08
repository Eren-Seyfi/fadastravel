import { FaMapSigns, FaPhoneVolume } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

const ContactAdress = () => {
  return (
    <div className="flex flex-col gap-2">
      {/*      Location Address */}
      <div className="flex  items-center justify-start gap-4 ">
        <div className="w-16 h-16 bg-[#4792BE] flex justify-center items-center">
          <FaMapSigns className="text-white text-3xl" />
        </div>
        <div>
          <a
            href="https://maps.app.goo.gl/iQ7VwmRyoubCyHjo9"
            className="text-lg font-semibold"
          >
            Location Address
          </a>
          <div className="text-sm w-72">
            Yukarı Mahalle, Fatih Caddesi, No:11 BC Uçhisar/Nevşehir/Türkiye
          </div>
        </div>
      </div>
      {/*   Email Address */}
      <div className="flex items-center justify-start gap-4">
        <div className="w-16 h-16 bg-[#4792BE] flex justify-center items-center">
          <IoMailSharp className="text-white text-3xl" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Email Address</h1>
          <span className=" text-sm">info@fadastravel.com</span>
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex items-center justify-start gap-4">
        <div className="w-16 h-16 bg-[#4792BE] flex justify-center items-center">
          <FaPhoneVolume className="text-white text-3xl" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Phone Number</h1>
          <div className="text-sm flex flex-col">
            <span>Telephone: +90 384 214 1440</span>
            <span>Mobile: +90 538 216 2785</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactAdress;
