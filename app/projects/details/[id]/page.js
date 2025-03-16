"use client";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../translations/translations";
import Image from "next/image";

export default function ProjectDetails() {
  const router = useRouter();
  const { id } = useParams();
  const { language } = useLanguage();
  const t = translations[language];
  
  const [project, setProject] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeTab, setActiveTab] = useState('info'); // 'info', 'photos', 'videos', 'details'
  const [isLoading, setIsLoading] = useState(true);
  const [projectType, setProjectType] = useState(''); // 'support', 'current', 'completed'

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Try to fetch from all possible project endpoints until we find the right one
        let projectData = null;
        let type = '';
        
        // Try support projects
        try {
          const supportResponse = await fetch(`http://localhost:3500/api/support-projects/${id}`);
          if (supportResponse.ok) {
            projectData = await supportResponse.json();
            type = 'support';
          }
        } catch (error) {
          console.log("Not a support project");
        }
        
        // Try current projects
        if (!projectData) {
          try {
            const currentResponse = await fetch(`http://localhost:3500/api/current-projects/${id}`);
            if (currentResponse.ok) {
              projectData = await currentResponse.json();
              type = 'current';
            }
          } catch (error) {
            console.log("Not a current project");
          }
        }
        
        // Try completed projects
        if (!projectData) {
          try {
            const completedResponse = await fetch(`http://localhost:3500/api/completed-projects/${id}`);
            if (completedResponse.ok) {
              projectData = await completedResponse.json();
              type = 'completed';
            }
          } catch (error) {
            console.log("Not a completed project");
          }
        }
        
        if (!projectData) {
          throw new Error("Project not found");
        }
        
        setProject(projectData);
        setProjectType(type);
        
        // Fetch project photos
        const photosResponse = await fetch(`http://localhost:3500/api/photos`);
        const allPhotosData = await photosResponse.json();
        const projectPhotos = allPhotosData.filter(photo => photo.projectId === id);
        setPhotos(projectPhotos);
        
        // Fetch project videos
        const videosResponse = await fetch(`http://localhost:3500/api/videos/${id}`);
        const videosData = await videosResponse.json();
        setVideos(videosData);
        
      } catch (error) {
        console.error("Error fetching project data:", error);
        // Could redirect to 404 page here
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#47a896]"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">{language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}</h1>
        <button 
          onClick={() => router.push('/projects')}
          className="px-4 py-2 bg-[#47a896] text-white rounded-lg"
        >
          {language === 'ar' ? 'العودة إلى المشاريع' : 'Back to Projects'}
        </button>
      </div>
    );
  }
  
  // Helper function to format date
  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-US', options);
    } catch (error) {
      return dateString;
    }
  };
  
  // Extract project title and description based on language
  // Handle both multilingual objects and plain strings
  const getLocalizedText = (field) => {
    if (!field) return '';
    if (typeof field === 'object' && field[language]) return field[language];
    return field; // If it's a plain string, return as is
  };
  
  const projectTitle = getLocalizedText(project.title);
  const projectDescription = getLocalizedText(project.description);
  const projectQuote = getLocalizedText(project.quote);
  const projectMission = getLocalizedText(project.mission);
  const hasDetails = project.details && project.details.length > 0;
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[80vh] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${project.image ? `http://localhost:3500/uploads/${projectType}-projects/${project.details.image}` : '/default-project-bg.jpg'})`,
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Project Type Badge */}
        {/* <div className="absolute top-6 left-6 z-10">
          <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
            projectType === 'support' ? 'bg-blue-100 text-blue-800' : 
            projectType === 'current' ? 'bg-green-100 text-green-800' : 
            'bg-purple-100 text-purple-800'
          }`}>
            {projectType === 'support' 
              ? (language === 'ar' ? 'مشروع دعم' : 'Support Project')
              : projectType === 'current' 
                ? (language === 'ar' ? 'مشروع حالي' : 'Current Project')
                : (language === 'ar' ? 'مشروع مكتمل' : 'Completed Project')
            }
          </span>
        </div> */}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{projectTitle}</h1>
            
            {projectQuote && (
              <p className="text-xl md:text-2xl mb-4 italic font-light">"{projectQuote}"</p>
            )}
            
            {projectMission && (
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                {projectMission}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Project Summary Card */}
      <div className="container mx-auto px-4 -mt-24 mb-12 relative z-10 rounded-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed">
            {getLocalizedText(project.summary) || projectDescription.substring(0, 300) + (projectDescription.length > 300 ? '...' : '')}
          </p>
          
          {projectType === 'support' && project.targetAmount && (
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{language === 'ar' ? 'المبلغ المستهدف:' : 'Target Amount:'}</span>
                <span className="font-bold">{project.targetAmount} {project.currency || 'USD'}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">{language === 'ar' ? 'المبلغ المجمع:' : 'Raised Amount:'}</span>
                <span className="font-bold">{project.raisedAmount || 0} {project.currency || 'USD'}</span>
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
                <div 
                  className="bg-[#47a896] h-3 rounded-full" 
                  style={{ width: `${Math.min(100, (project.raisedAmount / project.targetAmount) * 100 || 0)}%` }}
                ></div>
              </div>
              
              {/* Donation button if it's a support project */}
              <div className="mt-6 text-center">
                <button 
                  className="px-8 py-3 bg-[#47a896] text-white font-medium rounded-lg hover:bg-opacity-90 transition"
                  onClick={() => router.push(`/donate/${id}`)}
                >
                  {language === 'ar' ? 'تبرع الآن' : 'Donate Now'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      

      {/* Content based on active tab */}
      <div className="container mx-auto px-4 pb-20">
        
        {/* Details Tab */}

        
        {/* Photos Tab
        {activeTab === 'photos' && (
          <div className="mt-10 mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {photos.length > 0 ? (
                photos.map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
                    <img
                      src={`http://localhost:3500/uploads/photos/${photo.image}`}
                      alt={getLocalizedText(photo.title) || `Photo ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    {photo.title && (
                      <div className="p-4 bg-white">
                        <p className="font-medium">{getLocalizedText(photo.title)}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-10">
                  <p className="text-gray-500 text-lg">{language === 'ar' ? 'لا توجد صور متاحة' : 'No photos available'}</p>
                </div>
              )}
            </div>
          </div>
        )} */}
        
        {/* Videos Tab */}

      </div>
    </div>
  );
} 