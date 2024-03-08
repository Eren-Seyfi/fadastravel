"use client";
import { useEffect, useState } from "react";

const TransitionEffectPicture = () => {
  // Arka plan resimlerinin URL'lerini içeren bir dizi
  const backgroundImages = [
    "Home/TransitionPicture/1.jpg",
    "Home/TransitionPicture/2.jpg",
    "Home/TransitionPicture/3.jpg",
    "Home/TransitionPicture/4.jpg",
    "Home/TransitionPicture/5.jpg",
    "Home/TransitionPicture/6.jpg",
    "Home/TransitionPicture/7.jpg",
    "Home/TransitionPicture/8.jpg",
    "Home/TransitionPicture/9.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Gelecek resmin dizideki sırasını belirler
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000); // Her 10 saniyede bir resmi değiştir

    // Komponentin unmount edildiğinde zamanlayıcıyı temizle
    return () => clearInterval(timer);
  }, []); // Boş dependency array, sadece komponent ilk render edildiğinde zamanlayıcıyı oluşturur

  return (
    <div>
      <img
        src={backgroundImages[currentImageIndex]}
        alt=""
        className="block md:hidden"
      />
      <div
        className="md:bg-fixed bg-cover bg-no-repeat h-screen md:h-[90vh] w-full md:block hidden"
        style={{
          backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
        }}
      ></div>
    </div>
  );
};

export default TransitionEffectPicture;
