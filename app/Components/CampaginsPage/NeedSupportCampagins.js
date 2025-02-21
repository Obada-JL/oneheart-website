"use client";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import donateVector from "../../../public/donate-vector.svg";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useState, useEffect } from "react";

export default function NeedSupportCampagins({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          "http://145.223.33.75:3500/api/support-campagins"
        );
        const data = await response.json();
        console.log(data);
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
          {t.needsSupportCampaigns}
        </h1>
      </div>
      <div className="bg-gray-50">
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
          {filteredCampaigns.map((campaign) => {
            const totalAmount = campaign.total; // Use direct total amount
            const percentage = ((campaign.paid / totalAmount) * 100).toFixed(0);

            const getProgressColor = () => {
              if (percentage < 20) return " #D9534F"; // Red for < 20%
              if (percentage >= 20 && percentage <= 65) return " #FFAC00"; // Yellow for 30%-65%
              return "#0C9444"; // Green for > 65%
            };

            return (
              <SwiperSlide key={campaign.id} className="p-2 md:p-4">
                <div className="rounded-2xl shadow-md bg-white h-full">
                  <div>
                    <img
                      src={Slider1.src}
                      alt={campaign.title}
                      className="w-full rounded-t-2xl"
                      // w-[350px]
                    />
                  </div>
                  <div className="p-4 categorysDescription">
                    <div className="text-xl font-semibold title">
                      {campaign.title}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {campaign.description}
                    </div>

                    {/* Progress Bar */}
                    <div className="flex flex-col items-center w-full mt-4 progressContainer">
                      <div className="w-full h-4 skill-box">
                        <div className="skill-bar">
                          <span
                            className="skill-per html"
                            style={{
                              "--before-bg": getProgressColor(),
                              width: `${percentage}%`, // Custom CSS variable
                            }}
                          >
                            <span
                              className={`${getProgressColor()} before:${getProgressColor()} tooltip`}
                              style={{
                                "--before-bg": getProgressColor(), // Custom CSS variable
                              }}
                            >
                              {percentage}%
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between w-full text-sm mt-2">
                        <span>
                          {t.paid} ${campaign.paid}
                        </span>
                        <span>
                          {t.remaining} ${totalAmount - campaign.paid}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-4">
                      <div className="flex items-center gap-2 donation-button categorysDonation">
                        <img
                          src={donateVector.src}
                          className="w-6 h-6"
                          alt="donate"
                        />
                        <span className="font-medium">{t.quickDonation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
