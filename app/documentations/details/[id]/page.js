"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { translations } from "../../../translations/translations";

export default function DocDetails() {
  const { id } = useParams(); // Access the dynamic parameter
  const { language } = useLanguage();
  const t = translations[language];
  
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  const [activeView, setActiveView] = useState('photos'); // 'photos' or 'videos'
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch all photos 
        const photosResponse = await fetch(`https://oneheart.team/api/photos`);
        const allPhotosData = await photosResponse.json();
        // Filter photos by docId
        const filteredPhotos = allPhotosData.filter(photo => photo.docId === id);
        setPhotos(filteredPhotos);

        // Fetch videos directly from the docId endpoint
        const videosResponse = await fetch(`https://oneheart.team/api/videos/${id}`);
        const videosData = await videosResponse.json();
        setVideos(videosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="mb-12">
        <div
          className="relative p-7 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#47a896" }}
        >
          <h1 className="text-white text-2xl flex gap-1 items-center font-bold relative z-10">
            <span className="text-yellow-500 font-bold text-3xl">|</span>
            <div>{activeView === 'photos' ? (language === 'ar' ? 'الصور' : 'Photos') : (language === 'ar' ? 'الفيديوهات' : 'Videos')}</div>
          </h1>
          <div
            className="absolute inset-0 flex justify-center items-center"
            style={{ marginLeft: "100px" }}
          >
            <div className="w-14 h-14 bg-white opacity-20 rounded-full"></div>
          </div>
          <div className="absolute top-4 left-12 grid grid-cols-3 gap-1">
            {Array(9)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-yellow-500 rounded-full"
                ></div>
              ))}
          </div>
          <div className="absolute bottom-4 right-20 grid grid-cols-3 gap-1">
            {Array(9)
              .fill(null)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-yellow-500 rounded-full"
                ></div>
              ))}
          </div>
          <div
            className="text-yellow-500 absolute pe-10 me-10 justify-center flex text-2xl font-black bottom-0"
            style={{ zIndex: "0", bottom: "-18px" }}
          >
            &#10005;
          </div>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="flex rounded-lg overflow-hidden">
          <button
            className={`px-6 py-2 font-medium ${activeView === 'photos' ? 'bg-[#47a896] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveView('photos')}
          >
            {language === 'ar' ? 'الصور' : 'Photos'}
          </button>
          <button
            className={`px-6 py-2 font-medium ${activeView === 'videos' ? 'bg-[#47a896] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveView('videos')}
          >
            {language === 'ar' ? 'الفيديوهات' : 'Videos'}
          </button>
        </div>
      </div>

      {/* Content area */}
      <div>
        {activeView === 'photos' ? (
          <div className="flex mt-10 justify-center mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center relative">
              {photos.length > 0 ? (
                photos.map((photo, index) => (
                  <img
                    key={index}
                    src={`https://oneheart.team/uploads/documentation/${photo.image}`}
                    alt={photo.title ? photo.title[language] : `Photo ${index + 1}`}
                    height={200}
                    className="rounded-2xl  h-[200px]"
                  />
                ))
              ) : (
                <p className="text-center col-span-3">{language === 'ar' ? 'لا توجد صور متاحة' : 'No photos available'}</p>
              )}
            </div>
            <style jsx>{`
              .grid::after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                height: 1px;
                background-color: #47a896;
                width: 80%;
                margin: 0px auto;
                top: calc(33.333% - 0.5px); /* Adjust for gap */
              }
              .grid::before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                height: 1px;
                background-color: #47a896;
                width: 80%;
                margin: 0px auto;
                top: calc(66.666% - 0.5px); /* Adjust for gap */
              }
            `}</style>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-10 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
              {videos.length > 0 ? (
                videos.map((video, index) => (
                  <div key={index} className="rounded-xl overflow-hidden shadow-lg w-[500px]">
                    <div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
                      <video 
                        src={video.videoUrl}
                        className="absolute top-0 left-0 w-full h-full"
                        controls
                        preload="metadata"
                      ></video>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">
                        {video.title && video.title[language] ? video.title[language] : `Video ${index + 1}`}
                      </h3>
                      {video.description && video.description[language] && (
                        <p className="text-gray-600 mt-1">{video.description[language]}</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-2">{language === 'ar' ? 'لا توجد فيديوهات متاحة' : 'No videos available'}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
