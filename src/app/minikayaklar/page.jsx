import ToursForm from "@/components/MinikAyaklar/ToursForm";

import { getDataReviews, getDataContent, getDataPrice } from "@/lib/getdata";

import ToursCarousel from "@/components/MinikAyaklar/Carousel";

const PrivateToursPage = ({ params }) => {
  const DataContent = [
    "/MinikAyaklar/1.jpg",
    "/MinikAyaklar/2.jpg",
    "/MinikAyaklar/3.jpg",
    "/MinikAyaklar/4.jpg",
    "/MinikAyaklar/5.jpg",
    "/MinikAyaklar/6.jpg",
    "/MinikAyaklar/7.jpg",
    "/MinikAyaklar/8.jpg",
    "/MinikAyaklar/9.jpg",
    "/MinikAyaklar/10.jpg",
    "/MinikAyaklar/11.jpg",
    "/MinikAyaklar/12.jpg",
    "/MinikAyaklar/13.jpg",
    "/MinikAyaklar/14.jpg",
    "/MinikAyaklar/15.jpg",
    "/MinikAyaklar/16.jpg",
  ];

  return (
    <section className="space-y-20">
      <ToursCarousel items={DataContent} />
      <div className="container grid grid-cols-1 md:grid-cols-3 place-items-start place-content-center  w-full h-full">
        <div className="col-span-2 flex flex-col items-center justify-between container shadow-lg rounded-3xl w-full  h-full pt-10">
          <div className="space-y-4">
            <h1 className="text-3xl p-4 font-bold">
              Minik ayaklar Kapadokya’da / 20-22 Nisan 2024
            </h1>
            <p className="p-4 text-justify space-y-10">
              
              <p>
                İlkini sonbaharda yaptığımız Minik Ayaklar Kapadokya’da kampının
                bu ilkbaharda tekrarı için gün sayıyoruz 🤗 Kapadokya’da hem
                doğa hem de tarihin büyüsüne kapılacağız, binlerce yıl önce
                insanlar hayatta kalmak için nasıl bir yaşam sürmüşler, bugünkü
                yaşantılarımıza benziyor mu, bu benzerlikler neler, doğada yaşam
                için neler gerekli ve yeterli hem minik ayaklar hem biz biraz
                üstüne düşüneceğiz, konuşacağız ve doğanın sihrine ortak
                olacağız. Bu kampımız 4-12 yaş grubuna uygundur. Gezeceğimiz
                yerlere transfer araçları ile ulaşım sağlayacağız, mide
                bulantısı yaşayanlar için mide bulantısı ilacı, bilekliği veya
                göbek deliğine yara bandı işe yarayacaktır.
              </p>

              <div className="space-y-4">
                <p>Kamp programı:</p>
                <span>1. Gün</span>
                <p>
                  Kayseri & Nevşehir Havalimanında transfer aracı ile karşılama
                  – uçuşlarınızı en geç 10:30’da havaalanında olacak şekilde
                  planlamanızı tavsiye ederiz
                </p>
                <ul className="space-y-1">
                  <li>12:00 - 13:30 Otele yerleşme ve otelde öğle yemeği</li>
                  <li>13:30 Tanışma çemberi</li>
                  <li>
                    14:00 Göreme Panorama'ya hareket ve Panorama'da fotoğraf
                    çekimi
                  </li>
                  <li>15:00 - 16:30 Göreme Açık Hava müzesi</li>
                  <li>17:00 - 18:30 Avonos gezisi ve Çömlek yapım atölyesi</li>
                  <li>19:00 Otelde Akşam yemeği</li>
                  <li>20:30 Kamp ateşi ve ateş başı sohbetler</li>
                </ul>
              </div>

              <div className="space-y-4">
                <span>2. Gün</span>

                <ul className="space-y-1">
                  <li>09:00 - 10:30 Otelde Kahvaltı</li>
                  <li>
                    11 :00 - 13:30 Güvercinlik vadisi doğa yürüşü ve vadide
                    sandviç molası
                  </li>
                  <li>14:00 – 15:00 Yeraltı şehri gezisi</li>
                  <li>15:30 - 16:30 Kapadokya halı üretimi ve anlatımı</li>
                  <li>16:30 - 17:30 Kızılçukur'da günbatımı</li>
                  <li>18:00 Üçhisar’da serbest zaman</li>
                  <li>19:00 Üçhisar’da akşam yemeği</li>
                  <li>20:30 Kamp ateşi ve ateş başı sohbetler</li>
                </ul>
              </div>

              <div className="space-y-4">
                <span>3. Gün</span>

                <ul className="space-y-2">
                  <li>09:00 - 10:30 Otelde Kahvaltı</li>
                  <li>
                    10:30 - 12:00 Ebru Sanat Atölyesi & Üçhisar Kale Seyri
                    (Meydan Gezisi-grup ikiye ayrılacak, paralel etkinlik olarak
                    yapılacak. Bir grup ebru sanat atölyesinde iken diğer grup
                    kaleyi gezecek)
                  </li>
                  <li>12:00 Veda çemberi ve havaalanı transferi</li>
                  <p>
                    *Hava koşullarına göre program ve etkinliklerde değişiklik
                    olabilir.
                  </p>
                </ul>
              </div>

              <div className="space-y-4">
                <span>Fiyata dahil olan hizmetler</span>

                <ul className="space-y-2">
                  <li>- Programda belirtilen tüm atölye ve etkinlikler</li>
                  <li>- La Fairy Cappadocia Otelde 2 gece konaklama</li>
                  <li>- Program içerisindeki tüm transferler</li>
                  <li>
                    - Kayseri&Nevşehir Havaalanı transferleri (program
                    saatlerine uygun varış ve ayrılışlar için geçerli)
                  </li>
                  <li>
                    - 2 kahvaltı, 2 öğle (Pazar günü sandviç şeklinde), 2 akşam
                    yemeği
                  </li>
                  <li>- Rehberlik hizmeti ve Zorunlu Seyahat Sigortası</li>
                </ul>
              </div>

              <div className="space-y-4">
                <span>Fiyata dahil olmayan hizmetler</span>

                <ul className="space-y-2">
                  <li>- Kayseri havaalanına ulaşım, uçak/otobüs bileti</li>
                  <li>- Yemeklerde alınan içecekler</li>
                  <li>- Müze kartı</li>
                  <li>- İsteyen aileler için balon & at turu</li>
                </ul>
              </div>

              <p>
                14 günden daha fazla kala yapılan iptallerde ödemenin yarısı
                iade edilir. Son 14 gün içerisinde yapılan iptallerde herhangi
                bir iade yapılmaz.
              </p>

              <div className="space-y-4">
                <span>Fiyat</span>

                <ul className="space-y-2">
                  <li>- 2 yetişkin 1 çocuk 29.000₺</li>
                  <li>- 2 yetişkin 2 çocuk 32.000₺</li>
                  <li>- 1 yetişkin 1 çocuk 26.000₺</li>
                  <li>- 1 yetişkin 2 çocuk 29.000₺</li>
                </ul>
              </div>

              <p>
                Kesin kayıt için 10.000₺ ön ödeme yapılır. Kalan ödeme kampa 2
                hafta kala tamamlanır. Bu etkinlik Fadas Travel TÜRSAB No: 13360
                tarafından düzenlenmektedir.
              </p>
            </p>
          </div>
        </div>

        <ToursForm />
      </div>
    </section>
  );
};
export default PrivateToursPage;
