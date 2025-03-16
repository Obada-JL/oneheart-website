"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import donateVector from "../../../public/donate-vector.svg";
import donateVectorWhite from "../../../public/donate-vector-white.svg";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";
import PaymentMethodModal from "../PaymentMethodModal";

export default function CurrentCampagins({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedCampagin, setSelectedCampagin] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/current-campaigns");
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
  const getLocalizedContent = (field, arField) => {
    return language === "ar" ? arField : field;
  };
  const filteredCampaigns = Array.isArray(campaigns) 
    ? campaigns.filter(
        (campaign) =>
          selectedCategory === "All" || campaign.category === selectedCategory
      )
    : [];
    const handleDonateClick = (campagin) => {
      setSelectedCampagin(campagin);
      setShowPaymentModal(true);
    };
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
          <SwiperSlide key={campaign._id} className="p-2 md:p-4">
          <div className="rounded-2xl shadow-md bg-white h-full"style={{boxShadow: "-5px 5px 10px 0px #47A8961F"}}>
            <div>
              <img
                src={`http://localhost:3500/uploads/current-campaigns/${campaign.image}`}
                alt={getLocalizedContent(campaign.title, campaign.titleAr)}
                className="w-full h-[200px] object-cover rounded-2xl"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}
              />
            </div>
            <div className="p-4 text-center">
              <div className="text-lg md:text-xl lg:text-2xl font-semibold donation-button">
                {getLocalizedContent(campaign.title, campaign.titleAr)}
              </div>
              <div className="text-sm text-gray-600 mt-2 line-clamp-3">
                {getLocalizedContent(campaign.description, campaign.descriptionAr)}
              </div>
              {/* <div className="mt-4">
                <button 
                  className="flex items-center gap-2 donation-button categorysDonation mx-auto border border-[#47a896] rounded hover:bg-[#47a896] hover:text-white transition-all duration-300 px-3 py-2 group"
                  onClick={() => handleDonateClick(campaign)}
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
              </div> */}
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <PaymentMethodModal 
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        selectedItem={selectedCampagin}
        itemType="campagin"
      />
    </div>
  );
}
