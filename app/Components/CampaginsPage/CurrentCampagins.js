"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import donateVector from "../../../public/donate-vector.svg";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";

export default function CurrentCampagins({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          "http://localhost:3500/api/current-campagins"
        );
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      selectedCategory === "All" || campaign.category === selectedCategory
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container-fluid px-4 py-6 lg:py-8">
      <div className="flex text-start mb-4 lg:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {t.currentCampaigns}
        </h1>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          540: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {filteredCampaigns.map((campaign) => (
          <SwiperSlide key={campaign.id} className="p-2 md:p-4">
            <div className="rounded-2xl shadow-md bg-white h-full">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={Slider1.src}
                  alt={campaign.title}
                  className="rounded-t-2xl w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <div
                  className="text-lg md:text-xl lg:text-2xl font-semibold"
                  style={{ color: "#47A896" }}
                >
                  {campaign.title}
                </div>
                <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {campaign.description}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
