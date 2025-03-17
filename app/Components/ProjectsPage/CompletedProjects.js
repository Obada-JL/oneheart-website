"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import beneficiariesVector from "../../../public/beneficiaries-vector.png";
import donationsVector from "../../../public/donations-vector.png";
import locationVector from "../../../public/location.svg";
import calendarVector from "../../../public/calendar.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import { useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
  const { language } = useLanguage();
  const t = translations[language];

  // Helper function to get localized content based on language
  const getLocalizedContent = (field, arField) => {
    if (!field && !arField) return '';
    return language === 'ar' ? arField : field;
  };

  return (
    <div className="rounded-2xl shadow-md bg-white w-full max-w-[350px] h-[420px] ">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl h-[250px]"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}>
        <img
          src={`http://localhost:3500/uploads/completed-projects/${project.image}`}
          alt={getLocalizedContent(project.title, project.titleAr)}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold donation-button text-center mb-4">
          {getLocalizedContent(project.title, project.titleAr)}
        </h3>

        <div className="grid grid-cols-2 gap-0">
          {[
            { 
              icon: beneficiariesVector, 
              value: getLocalizedContent(
                project.details[0]?.Beneficiary,
                project.details[0]?.BeneficiaryAr
              )
            },
            { 
              icon: donationsVector, 
              value: getLocalizedContent(
                project.details[0]?.fund,
                project.details[0]?.fundAr
              )
            },
            { 
              icon: locationVector, 
              value: getLocalizedContent(
                project.details[0]?.location,
                project.details[0]?.locationAr
              )
            },
            { 
              icon: calendarVector, 
              value: getLocalizedContent(
                project.details[0]?.duration,
                project.details[0]?.durationAr
              )
            },
          ].map((item, index) => (
            <div
              key={index}
              
              className={`flex items-center justify-center gap-2 p-2 ${
                language === 'ar' 
                  ? index % 2 !== 0 ? "" : "border-l" 
                  : index % 2 == 0 ? "border-r" : ""
              } ${index < 2 ? "border-b" : ""} borderColorCompleted border-[#FFAC006B]`}
            >
              <img src={item.icon.src} className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-gray-600 text-sm md:text-base">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CompletedProjects({ selectedCategory }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://oneheart.team/api/completed-projects"
        );
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching completed projects:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || 
      project.category === selectedCategory ||
      project.categoryAr === selectedCategory
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container-fluid px-4 py-6 lg:py-8 pb-10">
      <div className="flex text-start mb-4 lg:mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          {t.completedProjects}
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
            <ProjectCard project={project} className="w-[350px]"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
