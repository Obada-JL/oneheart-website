"use client"; // Add this if you're using Next.js 13+ App Router
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider1 from "../../../public/sliderImage1.jpg";
import startVideoButton from "../../../public/startVideoButton.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

const VideoThumbnail = ({
  thumbnail,
  videoSrc,
  title,
  titleAr,
  language,
  date,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const displayTitle = language === "ar" ? titleAr : title;

  const handlePlayVideo = () => setIsPlaying(true);

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl shadow-md overflow-hidden">
      <div className="relative h-full">
        {!isPlaying ? (
          <img
            src={thumbnail}
            alt={displayTitle}
            className="w-full object-cover rounded-2xl"
          />
        ) : (
          <video className="w-full h-full rounded-2xl" controls autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-2xl">
            <button
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              onClick={handlePlayVideo}
            >
              <img src={startVideoButton.src} alt="Play" />
            </button>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-bold mb-1">{displayTitle}</h3>
              <p className="text-sm">{date}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function RecentCampagins() {
  const { language } = useLanguage();
  const t = translations[language];
  const [campaignVideos, setCampaignVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaignVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3500/api/campaign-videos"
        );
        setCampaignVideos(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch campaign videos:", err);
        setLoading(false);
      }
    };

    fetchCampaignVideos();
  }, []);

  if (loading) {
    return <div className="text-center py-10">{language === 'ar' ? 'جاري التحميل...' : 'Loading...'}</div>;
  }

  return (
    <div className="container-fluid py-10">
      <div className="flex text-center justify-center mb-8">
        <h1 className="mainHeaders px-4">{t.recentCampaigns}</h1>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {campaignVideos.map((video) => (
            <VideoThumbnail
              key={video._id}
              thumbnail={`http://localhost:3500/uploads/campaign-thumbnails/${video.thumbnail}`}
              videoSrc={`http://localhost:3500/uploads/campaign-videos/${video.video}`}
              title={video.title}
              titleAr={video.titleAr}
              language={language}
              date={new Date(video.date).toLocaleDateString(
                language === "ar" ? "ar-SA" : "en-US"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
