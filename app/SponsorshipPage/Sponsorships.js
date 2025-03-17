"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import axios from "axios";
import donateVector from "../../public/donate-vector.svg";
import donateVectorWhite from "../../public/donate-vector-white.svg";
import "../globals.css"
import { translations } from "../translations/translations";
import PaymentMethodModal from "../Components/PaymentMethodModal";

export default function Sponsorships({ selectedCategory }) {
  const { language } = useLanguage();
  const [sponsorships, setSponsorships] = useState([]);
  const [selectedSponsorship, setSelectedSponsorship] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const t = translations[language];
  useEffect(() => {
    const fetchSponsorships = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://oneheart.team/api/sponsorships");
        const data = response.data;

        // Filter sponsorships based on selected category
        const filteredData = selectedCategory === "All" 
          ? data 
          : data.filter(item => item.category === selectedCategory);

        setSponsorships(filteredData);
      } catch (error) {
        console.error("Error fetching sponsorships:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSponsorships();
  }, [selectedCategory]);
  const handleDonateClick = (sponsorship) => {
    setSelectedSponsorship(sponsorship);
    setShowPaymentModal(true);
  };

  const handleCloseModal = () => {
    setShowPaymentModal(false);
  };
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container-fluid px-4 py-8">
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center">
          {sponsorships.map((sponsorship) => {
              const total = Number(sponsorship.total) || 0;
              const remaining = Number(sponsorship.remaining) || 0;
              const paid = total - remaining || 0;
              const collected = total - remaining;
              const percentage = total > 0 ? ((collected / total) * 100).toFixed(0) : 0;
              const getProgressColor = () => {
                if (percentage < 20) return " #D9534F"; // Red for < 20%
                if (percentage >= 20 && percentage <= 65) return " #FFAC00"; // Yellow for 30%-65%
                return "#0C9444"; // Green for > 65%
              };
              const styles = {
                right: language === "ar" ? `${percentage}%` : "auto",
                left: language === "ar" ? "auto" : `${percentage}%`,
                transform : language === "ar"?"translateX(50%)":"translateX(-50%)"
              };
              return (
                <div key={sponsorship.id} className="w-[300px] h-[475px]" >
                  <div className="rounded-2xl shadow-md bg-white w-full h-full flex flex-col justify-around">
                    <div className="aspect-w-18 aspect-h-9">
                      <img
                        src={`http://localhost:3500/uploads/sponsorships/${sponsorship.sponsorshipImage}`}
                        alt={sponsorship.title}
                        className="w-full h-[250px] object-cover rounded-2xl"style={{boxShadow: "-5px 5px 10px 0px #0967391F"}}
                      />
                    </div>
                    <div className="p-4 pt-0 categorysDescription">
                      <div className="text-xl font-semibold title text-[#47A896]">
                        {language == "ar"? sponsorship.titleAr:sponsorship.title}
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        {language == "ar"? sponsorship.descriptionAr:sponsorship.description}
                      </div>
                    {/* Progress Bar */}
                    <div className="flex flex-col w-full mt-4 progressContainer">

                        <div className="w-full p-4 relative">
                        <div className="relative w-full h-2 bg-gray-300 rounded-lg">
                          <div
                            className={`absolute h-2 bg-[${getProgressColor()}] rounded-lg`}
                            style={{ width: `${percentage}%`, backgroundColor: `${getProgressColor()}` }}
                          />
                        </div>
                        <div
                          // className="absolute bg-green-600 text-white text-xs px-1 py-1 rounded"
                          className={`absolute text-white  text-xs px-1 py-1 mt-[-18px] bg-[${getProgressColor()}] rounded`}
                          style={{ ...styles, backgroundColor: `${getProgressColor()}` }}
                        >
                          {percentage}%
                        </div>
      {/* <div className="flex justify-between mt-2 text-gray-700 text-sm">
        <span>Paid ${paid}</span>
        <span>Remaining ${remaining}</span>
      </div> */}
    </div></div>
    <div className="flex justify-between mt-2 text-gray-700 text-sm">
        <span>{t["paid"]} ${paid}</span>
        <span>{t["remaining"]} ${remaining}</span>
      </div>
    {/* <span className="text-start text-gray-700 text-xs">
                          Remaining ${sponsorship.remaining} per month
                        </span> */}
          <button 
            className="flex mt-2 items-center gap-2 donation-button categorysDonation mx-auto border border-[#47a896] rounded hover:bg-[#47a896] hover:text-white transition-all duration-300 px-3 py-2 group"
            onClick={() => handleDonateClick(sponsorship)}
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
            })}
          </div>
        </div>
      </div>
      <PaymentMethodModal
        isOpen={showPaymentModal}
        onClose={handleCloseModal}
        selectedItem={selectedSponsorship}
        itemType="sponsorship"
      />
    </div>
  );
}
// import donateVector from "../../public/donate-vector.svg";
// import Slider1 from "../../public/sliderImage1.jpg";
// export default function Sponsorships() {
//   const cards = [
//     {
//       id: 1,
//       title: "Essential Food Basket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
//       imgSrc: "https://via.placeholder.com/150",
//       paidAmount: 2000,
//       remainingAmount: 6000,
//     },
//     {
//       id: 2,
//       title: "Essential Food Basket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
//       imgSrc: "https://via.placeholder.com/150",
//       paidAmount: 3780,
//       remainingAmount: 6900,
//     },
//     {
//       id: 3,
//       title: "Essential Food Basket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
//       imgSrc: "https://via.placeholder.com/150",
//       paidAmount: 9200,
//       remainingAmount: 3000,
//     },
//     {
//       id: 4,
//       title: "Essential Food Basket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
//       imgSrc: "https://via.placeholder.com/150",
//       paidAmount: 8500,
//       remainingAmount: 4000,
//     },
//     {
//       id: 5,
//       title: "Essential Food Basket",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
//       imgSrc: "https://via.placeholder.com/150",
//       paidAmount: 87,
//       remainingAmount: 4000,
//     },
//   ];

//   return (
//     <div className="container-fluid px-4 py-8">
//       <div className="flex text-start mb-6">
//         <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
//           Needs Your Support
//         </h1>
//       </div>
//       <div className="bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//             {cards.map((card) => {
//               const totalAmount = card.paidAmount + card.remainingAmount;
//               const percentage = (
//                 (card.paidAmount / totalAmount) *
//                 100
//               ).toFixed(0);

//               const getProgressColor = () => {
//                 if (percentage < 20) return " #D9534F"; // Red for < 20%
//                 if (percentage >= 20 && percentage <= 65) return " #FFAC00"; // Yellow for 30%-65%
//                 return "#0C9444"; // Green for > 65%
//               };

//               return (
//                 <div key={card.id} className="w-full">
//                   <div className="rounded-2xl shadow-md bg-white w-full">
//                     <div className="aspect-w-16 aspect-h-9">
//                       <img
//                         src={Slider1.src}
//                         alt={card.title}
//                         className="w-full h-full object-cover rounded-t-2xl"
//                       />
//                     </div>
//                     <div className="p-4 categorysDescription">
//                       <div className="text-xl font-semibold title">
//                         {card.title}
//                       </div>
//                       <div className="text-sm text-gray-600 mt-2">
//                         {card.description}
//                       </div>

//                       {/* Progress Bar */}
//                       <div className="flex flex-col w-full mt-4 progressContainer">
//                         <span className="text-start text-gray-700 text-xs">
//                           Remaining ${card.remainingAmount} per month
//                         </span>
//                         <div className="w-full p-4 relative">
//                         <div className="relative w-full h-2 bg-gray-300 rounded-lg">
//                           <div
//                             className="absolute h-2 bg-green-600 rounded-lg"
//                             style={{ width: `${percentage}%` }}
//                           />
//                         </div>
//                         <div
//                           className="absolute mt-[-18px] bg-green-600 text-white text-sm px-2 py-1 rounded-lg"
//                           style={{ left: `${percentage}%`, transform: "translateX(-50%)" }}
//                         >
//                           {percentage}%
//                         </div>
//       {/* <div className="flex justify-between mt-2 text-gray-700 text-sm">
//         <span>Paid ${paid}</span>
//         <span>Remaining ${remaining}</span>
//       </div> */}
//     </div>
// {/* 
//                         <div className="w-full h-4 skill-box">
//                           <div className="skill-bar">
//                             <span
//                               className="skill-per html"
//                               style={{
//                                 "--before-bg": getProgressColor(),
//                                 width: `${percentage}%`, // Custom CSS variable
//                               }}
//                             >
//                               <span
//                                 className={`${getProgressColor()} before:${getProgressColor()} tooltip`}
//                                 style={{
//                                   "--before-bg": getProgressColor(), // Custom CSS variable
//                                 }}
//                               >
//                                 {percentage}%
//                               </span>
//                             </span>
//                           </div>
//                         </div> */}
//                         {/* <div className="flex justify-between w-full text-sm mt-2">
//                           <span>Paid ${card.paidAmount}</span>
//                           <span>Remaining ${card.remainingAmount}</span>
//                         </div> */}
//                       </div>
//                       <div className="flex justify-center items-center mt-4">
//                         <div className="flex items-center gap-2 donation-button categorysDonation">
//                           <img
//                             src={donateVector.src}
//                             className="w-6 h-6"
//                             alt="donate"
//                           />
//                           <span className="font-medium">Quick Donation</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
