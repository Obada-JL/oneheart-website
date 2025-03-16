"use client";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import donateVector from "../../../public/donate-vector.svg";
import donateVectorWhite from "../../../public/donate-vector-white.svg";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useState, useEffect } from "react";
import PaymentMethodModal from "../../Components/PaymentMethodModal";

export default function NeedSupportCampagins({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  // Payment methods - you can replace these with your actual payment links
  const paymentMethods = [
    { 
      id: 'paypal', 
      name: 'PayPal', 
      icon: '💳',
      link: 'https://www.paypal.com/donate' 
    },
    { 
      id: 'bank', 
      name: language === 'ar' ? 'تحويل بنكي' : 'Bank Transfer', 
      icon: '🏦',
      link: '/bank-transfer' 
    },
    { 
      id: 'crypto', 
      name: language === 'ar' ? 'عملات رقمية' : 'Cryptocurrency', 
      icon: '₿',
      link: '/crypto-payment' 
    }
  ];

  const handleDonateClick = (campaign) => {
    setSelectedCampaign(campaign);
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  const getLocalizedContent = (field, arField) => {
    if (!field && !arField) return '';
    return language === 'en' ? field : arField;
  };

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/support-campaigns");
        if (!response.ok) {
          throw new Error(`Failed to fetch campaigns: ${response.statusText}`);
        }
        const data = await response.json();
        if (!data || !Array.isArray(data)) {
          console.error("Invalid data format received:", data);
          throw new Error('Invalid data format received from server');
        }
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        setError(error.message);
        setCampaigns([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  // Only filter if campaigns is an array
  const filteredCampaigns = Array.isArray(campaigns) 
    ? campaigns.filter(
        (campaign) =>
          selectedCategory === "All" || campaign.category === selectedCategory
      )
    : [];

  if (isLoading) {
    return (
      <div className="container-fluid px-4 py-6 lg:py-8 text-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid px-4 py-6 lg:py-8 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!filteredCampaigns.length) {
    return (
      <div className="container-fluid px-4 py-6 lg:py-8 text-center">
        {selectedCategory === "All" 
          ? "No campaigns available at the moment."
          : `No campaigns found in category "${selectedCategory}".`
        }
      </div>
    );
  }

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
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        >
          {filteredCampaigns.map((campagin) => {
            const total = Number(campagin.total) || 0;
            const paid = Number(campagin.paid) || 0;
            const remaining = total - paid;
            const percentage = total > 0 ? ((paid / total) * 100).toFixed(0) : "0";

            const getProgressColor = () => {
              if (percentage < 20) return "#D9534F"; // Red for < 20%
              if (percentage >= 20 && percentage <= 65) return "#FFAC00"; // Yellow for 30%-65%
              return "#0C9444"; // Green for > 65%
            };

            return (
              <SwiperSlide key={campagin._id} className="p-2 md:p-4">
                <div className="rounded-2xl shadow-md bg-white h-full h-[400px]">
                  <div className="aspect-w-16 aspect-h-9 h-[250px]">
                    <img
                      src={`http://localhost:3500/uploads/support-campaigns/${campagin.image}`}
                      alt={getLocalizedContent(campagin.title, campagin.titleAr)}
                      className="rounded-2xl w-full h-full object-cover"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}
                    />
                  </div>
                  <div className="p-4 text-center z-2 relative mt-[-60px] bg-white rounded-2xl"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}>
                    <div className="text-lg md:text-xl lg:text-2xl font-semibold donation-button">
                      {getLocalizedContent(campagin.title, campagin.titleAr)}
                    </div>
                    <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {getLocalizedContent(campagin.description, campagin.descriptionAr)}
                    </div>

                    {/* Progress Bar */}
                    <div className="flex flex-col w-full mt-4">
                      <div className="w-full p-4 relative">
                        <div className="relative w-full h-2 bg-gray-300 rounded-lg">
                          <div
                            className="absolute h-2 rounded-lg"
                            style={{ 
                              width: `${percentage}%`,
                              backgroundColor: getProgressColor()
                            }}
                          />
                        </div>
                        <div
                          className="absolute text-white text-xs px-1 py-1 mt-[-18px] rounded"
                          style={{
                            right: language === "ar" ? `${percentage}%` : "auto",
                            left: language === "ar" ? "auto" : `${percentage}%`,
                            transform: language === "ar" ? "translateX(50%)" : "translateX(-50%)",
                            backgroundColor: getProgressColor()
                          }}
                        >
                          {percentage}%
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between mt-2 text-gray-700 text-sm">
                      <span>{t.paid} ${paid}</span>
                      <span>{t.remaining} ${remaining}</span>
                    </div>

                    <div className="flex justify-center items-center mt-4">
                      <button 
                        className="flex items-center gap-2 donation-button categorysDonation mx-auto border border-[#47a896] rounded hover:bg-[#47a896] hover:text-white transition-all duration-300 px-3 py-2 group"
                        onClick={() => handleDonateClick(campagin)}
                      >
                        <img
                          src={donateVector.src} 
                          className="w-5 h-5 md:w-6 md:h-6 group-hover:hidden"
                          alt="donate"
                        />
                        <img
                          src={donateVectorWhite.src} 
                          className="w-5 h-5 md:w-6 md:h-6 hidden group-hover:block"
                          alt="donate"
                        />
                        <span className="font-medium text-sm md:text-base">
                          {t.quickDonation}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Use the common PaymentMethodModal component */}
      <PaymentMethodModal 
        isOpen={showPaymentModal}
        onClose={handleCloseModal}
        selectedItem={selectedCampaign}
        itemType="campaign"
      />
    </div>
  );
}
