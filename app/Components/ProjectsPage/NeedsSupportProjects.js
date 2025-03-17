"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import donateVector from "../../../public/donate-vector.svg";
import donateVectorWhite from "../../../public/donate-vector-white.svg";
import beneficiariesVector from "../../../public/beneficiaries-vector.png";
import donationsVector from "../../../public/donations-vector.png";
import locationVector from "../../../public/location.svg";
import calendarVector from "../../../public/calendar.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";
import PaymentMethodModal from "../../Components/PaymentMethodModal";

const ProjectCard = ({ project, onDonateClick }) => {
  const { language } = useLanguage();
  const t = translations[language];

  // Helper function to get localized content based on language
  const getLocalizedContent = (field, arField) => {
    if (!field && !arField) return '';
    return language === 'ar' ? arField : field;
  };

  // Calculate progress
  const total = Number(project.total) || 0;
  const paid = Number(project.paid) || 0;
  const remaining = total - paid;
  const percentage = total > 0 ? ((paid / total) * 100).toFixed(0) : "0";

  const getProgressColor = () => {
    if (percentage < 20) return "#D9534F"; // Red for < 20%
    if (percentage >= 20 && percentage <= 65) return "#FFAC00"; // Yellow for 30%-65%
    return "#0C9444"; // Green for > 65%
  };

  return (
    <div className="rounded-2xl shadow-md bg-white w-full max-w-[350px] h-[400px]">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl h-[250px]"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}>
        <img
          src={`https://oneheart.team/uploads/support-projects/${project.image}`}
          alt={getLocalizedContent(project.title, project.titleAr)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold donation-button text-center mb-2">
          <a href={`/projects/details/${project._id}`}>{getLocalizedContent(project.title, project.titleAr)}</a>
          
        </h3>
<div className="flex justify-center">{getLocalizedContent(project.description, project.descriptionAr)}</div>
      
        

        <div className="mt-2 flex justify-center">
          <button 
            className="flex items-center gap-2 donation-button categorysDonation mx-auto border border-[#47a896] rounded hover:bg-[#47a896] hover:text-white transition-all duration-300 px-3 py-2 group"
            onClick={() => onDonateClick(project)}
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
              {language === 'ar' ? 'تبرع سريع' : 'Quick Donation'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function NeedsSupportProjects({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleDonateClick = (project) => {
    setSelectedProject(project);
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://oneheart.team/api/support-projects");
        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.statusText}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format received from server');
        }
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLocalizedContent = (field, arField) => {
    if (!field && !arField) return '';
    return language === 'en' ? field : arField;
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || 
      getLocalizedContent(project.category, project.categoryAr) === selectedCategory
  );

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

  if (!filteredProjects.length) {
    return (
      <div className="container-fluid px-4 py-6 lg:py-8 text-center">
        {selectedCategory === "All" 
          ? t.noProjectsAvailable
          : t.formatString(t.noProjectsInCategory, selectedCategory)}
      </div>
    );
  }

  return (
    <div className="container-fluid px-4 py-6 lg:py-8 pb-10">
      <div className="flex text-start mb-4 lg:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {t.needsYourSupport}
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
        className="w-[full] pb-8"
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        {filteredProjects.map((project) => (
          <SwiperSlide key={project._id} className="w-[350px]">
            <ProjectCard 
              project={project} 
              onDonateClick={handleDonateClick}
              className="w-[350px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Use the common PaymentMethodModal component */}
      <PaymentMethodModal 
        isOpen={showPaymentModal}
        onClose={handleCloseModal}
        selectedItem={selectedProject}
        itemType="project"
      />
    </div>
  );
}
