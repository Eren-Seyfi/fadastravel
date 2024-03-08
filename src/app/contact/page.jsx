"use client";

import { useEffect } from "react";
import AOS from "aos";

import ContactSocialMedia from "@/components/ContactPage/SocialMedia";
import ContactMap from "@/components/ContactPage/ContactMap";
import ContactAdress from "@/components/ContactPage/ContactAdress";
import ContactForm from "@/components/ContactPage/ContactForm";
const ContactPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="w-full h-[300px] overflow-hidden">
        <img
          src="Contact/38-2.webp"
          alt="Kesilmiş Resim"
          className="object-cover object-top  w-full h-full"
        />
      </div>
      <section
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-items-center px-2 md:px-4 lg:px-16 py-20 space-y-10 md:space-y-0" /* className="flex flex-wrap gap-10 justify-center items-center my-16" */
      >
        {/* GET IN TOUCH */}
        <ContactForm />

        {/* Adress ve Sosyal Medya */}
        <div
          className="flex flex-col items-start justify-between gap-10"
          data-aos="fade-up"
        >
          {/* Adress */}
          <ContactAdress />

          {/* Sosyal Medya */}
          <ContactSocialMedia />
        </div>

        {/* Harita */}
        <ContactMap />
      </section>
    </div>
  );
};
export default ContactPage;
