"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import donateVector from "../../../public/donate-vector.svg";
import beneficiariesVector from "../../../public/beneficiaries-vector.png";
import donationsVector from "../../../public/donations-vector.png";
import locationVector from "../../../public/location.svg";
import calendarVector from "../../../public/calendar.svg";
import Slider1 from "../../../public/sliderImage1.jpg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";

const ProjectCard = ({ image, title, details }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="rounded-2xl shadow-md bg-white w-full max-w-[350px] mx-auto"dir="ltr">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}>
        <img
          src={`http://localhost:3500/uploads/completed-campaigns/${image}`}
          alt={title}
          className="w-full object-cover h-[250px]"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-[#47A896] text-center mb-4">
          {title}
        </h3>

        <div className="grid grid-cols-2 gap-0">
          <div className="flex gap-2 justify-center items-center border-r border-b  p-2 borderColorCompleted border-[#FFAC006B]">
            <div className="text-gray-500 font-semibold">
              <img src={beneficiariesVector.src} width={20} />
            </div>
            <div className="text-gray-500 flex gap-2">
              {details[0].Beneficiary}
            </div>
          </div>

          <div className="flex gap-2 items-center justify-center border-b  p-2 borderColorCompleted border-[#FFAC006B]">
            <div className="text-gray-500 font-semibold">
              <img src={donationsVector.src} width={20} />
            </div>
            <div className="text-gray-500 flex gap-2">{details[0].fund}</div>
          </div>

          <div className="flex gap-2 justify-center items-center border-r  p-2 borderColorCompleted border-[#FFAC006B]">
            <div className="text-gray-500 font-semibold">
              <img src={locationVector.src} width={20} />
            </div>
            <div className="text-gray-500 flex gap-2">
              {details[0].location}
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center p-2 borderColorCompleted border-[#FFAC006B]">
            <div className="text-gray-500 font-semibold">
              <img src={calendarVector.src} width={20} />
            </div>
            <div className="text-gray-500 flex gap-2">
              {details[0].duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CompletedCampagins({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [campaigns, setCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch("http://localhost:3500/api/completed-campaigns");
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

  const filteredCampaigns = Array.isArray(campaigns) 
    ? campaigns.filter(
        (campaign) =>
          selectedCategory === "All" || campaign.category === selectedCategory
      )
    : [];

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container-fluid px-4 py-6 lg:py-8">
      <div className="flex text-start mb-4 lg:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {t.completedCampaigns}
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
          <SwiperSlide key={campaign._id}>
            <ProjectCard
              image={campaign.image}
              title={campaign.title}
              details={campaign.details}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
