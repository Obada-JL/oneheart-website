"use client";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { MapPin, Mail, Phone, AtSign } from "lucide-react";
import whatsapp from "../../public/whatsappContact.svg";
import telegram from "../../public/telegramContact.svg";
import location from "../../public/locationContact.svg";
import email from "../../public/emailContact.svg";
import SuccessModal from "@/components/SuccessModal";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    recievedMessage: "",
    language: language,
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://oneheart.team/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language: language,
        }),
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          senderName: "",
          senderEmail: "",
          recievedMessage: "",
          language: language,
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className="mb-10">
      {/* Header section - translated */}
      <div className="mb-8">
        <div className="relative p-4 md:p-7 flex items-center justify-center overflow-hidden bg-[#47a896]">
          <h1 className="text-white text-2xl flex gap-1 items-center font-bold relative z-10">
            <span className="text-yellow-500 font-bold text-3xl">|</span>
            <div>{t.contactUs}</div>
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

      {/* Contact content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form - translated */}
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
            <h2 className="text-2xl flex gap-2 font-semibold mb-4 text-gray-800">
              <span className="text-yellow-500 font-bold text-3xl">|</span>
              <div>{t.contactUs}</div>
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <label>{t.name}</label>
                <input
                  type="text"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  placeholder={t.enterYourName}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>{t.email}</label>
                <input
                  type="email"
                  name="senderEmail"
                  value={formData.senderEmail}
                  onChange={handleChange}
                  placeholder={t.enterYourEmail}
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label>{t.message}</label>
                <textarea
                  name="recievedMessage"
                  value={formData.recievedMessage}
                  onChange={handleChange}
                  placeholder={t.enterYourMessage}
                  rows="5"
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#47a896] text-white py-3 px-6 rounded-2xl hover:bg-[#3a8a7b] transition-colors duration-300"
                disabled={loading}
                style={{
                  display: "block",
                  margin: "0 auto",
                  width: "250px",
                }}
              >
                {loading ? t.sending : t.send}
              </button>
            </form>
          </div>

          {/* Contact Information - translated */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6">
              <h2 className="text-xl md:text-2xl flex gap-2 font-semibold mb-4 text-gray-800">
                <span className="text-yellow-500 font-bold text-3xl">|</span>
                <div>{t.contactInfo}</div>
              </h2>
              <div className="space-y-4 md:space-y-6 text-gray-700">
                <div className="flex items-center gap-3 md:gap-4">
                  <img src={whatsapp.src} width={50} />
                  <span>{t.phoneContact}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <img src={email.src} width={50} />
                  <span>{t.emailContact}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <img src={telegram.src} width={50} />
                  <span>@for_gaza1</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <img src={location.src} width={50} />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[250px] md:h-[250px]">
              <iframe
                title="Gaza Location"
                className="w-full h-64 rounded-2xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170248.1841379375!2d34.21663524316408!3d31.506644488989994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502f7f52d11712b%3A0xb2b40df64a65f8c4!2sGaza!5e0!3m2!1sen!2sus!4v1707100000000"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
