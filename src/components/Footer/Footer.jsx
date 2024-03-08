import FooterContact from "./FooterContact/FooterContact";

const Footer = () => {
  return (
    <footer className="bg-[#383838] py-10 md:px-0 px-4">
      <div className=" container flex items-center md:flex-row flex-col md:gap-0 gap-10">
        <div className="w-full md:w-1/3">
          <FooterContact />
        </div>
        {/* Logo */}

        <div className="w-full md:w-1/3 flex flex-col items-center">
          <img
            src="/fadas-logo-footer.webp"
            alt="Logo"
            priority={true}
            className="h-32"
          />
        </div>
        {/* TURSAB Logo */}
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src="/tursab-logo-footer.webp"
            alt="Logo"
            priority={true}
            className="h-24"
          />

          <h2 className="font-extrabold text-2xl text-white">
            MEMBER NO: 13360
          </h2>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
