"use client"; // Add this if you're using Next.js 13+ App Router
// import video from "../../public/video.mp4";
import React, { useState } from "react";
import Slider1 from "../../../public/sliderImage1.jpg";
import startVideoButton from "../../../public/startVideoButton.svg";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

const VideoThumbnail = ({ thumbnail, videoSrc, title, date }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => setIsPlaying(true);

  return (
    <div className="relative w-full max-w-sm mx-auto rounded-2xl shadow-md overflow-hidden">
      <div className="relative h-full">
        {!isPlaying ? (
          <img
            src={thumbnail}
            alt="Video Thumbnail"
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
              <img src={startVideoButton.src} />
            </button>
            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-lg font-bold mb-1">{title}</h3>
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

  const videos = [
    {
      thumbnail: Slider1.src,
      videoSrc: "https://www.youtube.com/watch?v=haP7irsJLBQ",
      title:
        "A campaign to distribute 14 thousand liters of water to our people in ...",
      date: "28 October 2024",
    },
    {
      thumbnail: Slider1.src,
      videoSrc: "/video.mp4",
      title:
        "A campaign to distribute 14 thousand liters of water to our people in ...",
      date: "28 October 2024",
    },
    {
      thumbnail: Slider1.src,
      videoSrc: "/video.mp4",
      title:
        "A campaign to distribute 14 thousand liters of water to our people in ...",
      date: "28 October 2024",
    },
    {
      thumbnail: Slider1.src,
      videoSrc: "/video.mp4",
      title:
        "A campaign to distribute 14 thousand liters of water to our people in ...",
      date: "28 October 2024",
    },
    {
      thumbnail: Slider1.src,
      videoSrc: "/video.mp4",
      title:
        "A campaign to distribute 14 thousand liters of water to our people in ...",
      date: "28 October 2024",
    },
    {
      thumbnail: Slider1.src,
      videoSrc: "/video.mp4",
      title:
        "A campaign to distribute 14 thousand liters of water to our people in ...",
      date: "28 October 2024",
    },

    // Add more videos here
  ];
  return (
    <div className="container-fluid py-10">
      <div className="flex text-center justify-center mb-8">
        <h1 className="mainHeaders px-4">{t.recentCampaigns}</h1>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <VideoThumbnail key={index} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
}
