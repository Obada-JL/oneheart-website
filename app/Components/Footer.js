// // "use client";
// // import Facebook from "../../public/facebook.svg";
// // import Telegram from "../../public/telegram.svg";
// // import twitter from "../../public/twitter.svg";
// // import tiktok from "../../public/tiktok.svg";
// // import instagram from "../../public/instagram.svg";
// // import whatsapp from "../../public/whatsapp.svg";
// // import logoPadding from "../../public/logo-padding.png";
// // import { useLanguage } from "../context/LanguageContext";
// // import { translations } from "../translations/translations";

// // export default function Footer() {
// //   const { language } = useLanguage();
// //   const t = translations[language];

// //   return (
// //     <footer className="footerContainer">
// //       <div className="pt-5 pb-3">
// //         <div className="flex justify-around justify-center p-4 mb-3 mt-3">
// //           <div className="flex flex-col items-center w-35">
// //             <img src={logoPadding.src} width={100} />
// //             <div
// //               style={{ width: "250px" }}
// //               className="text-center mt-3 text-white"
// //             >
// //               {t.aboutDesc}
// //             </div>
// //           </div>
// //           <div className="w-65 flex justify-between gap-20">
// //             <div>
// //               <div className="inline-block footerLink mb-2">
// //                 {t.contactUsFooter}
// //               </div>
// //               <ol className="list-none text-white gap-3 flex flex-col">
// //                 <li>{t.emailContact}</li>
// //                 <li>@for_gaza1</li>
// //                 <li>{t.phoneContact}</li>
// //                 <li>{t.location}</li>
// //               </ol>
// //             </div>
// //             <div>
// //               <div className="inline-block footerLink mb-2">{t.donations}</div>
// //               <ol className="list-none text-white gap-3 flex flex-col">
// //                 <li>{t.campaigns}</li>
// //                 <li>{t.projects}</li>
// //                 <li>{t.warranties}</li>
// //               </ol>
// //             </div>
// //             <div>
// //               <div className="inline-block footerLink mb-2">{t.goTo}</div>
// //               <ol className="list-none text-white gap-3 flex flex-col">
// //                 <li>{t.home}</li>
// //                 <li>{t.donate}</li>
// //                 <li>{t.programs}</li>
// //                 <li>{t.campaigns}</li>
// //                 <li>{t.guarantees}</li>
// //                 <li>{t.aboutUs}</li>
// //               </ol>
// //             </div>
// //           </div>
// //         </div>
// //         <hr />
// //         <div className="flex justify-between items-center p-4">
// //           <div className="text-white">
// //             {t.allRightsReserved} {new Date().getFullYear()}
// //           </div>
// //           <div>
// //             <div className="flex gap-2">
// //               <img src={Facebook.src} width={25} />
// //               <img src={Telegram.src} width={25} />
// //               <img src={twitter.src} width={25} />
// //               <img src={tiktok.src} width={25} />
// //               <img src={instagram.src} width={25} />
// //               <img src={whatsapp.src} width={25} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// "use client";
// import Facebook from "../../public/facebook.svg";
// import Telegram from "../../public/telegram.svg";
// import twitter from "../../public/twitter.svg";
// import tiktok from "../../public/tiktok.svg";
// import instagram from "../../public/instagram.svg";
// import whatsapp from "../../public/whatsapp.svg";
// import logoPadding from "../../public/logo-padding.png";
// import { useLanguage } from "../context/LanguageContext";
// import { translations } from "../translations/translations";

// export default function Footer() {
//   const { language } = useLanguage();
//   const t = translations[language];

//   return (
//     <footer className="footerContainer">
//       <div className="pt-5 pb-3">
//         <div className="flex flex-col md:flex-row justify-around p-4 mb-3 mt-3">
//           <div className="flex flex-col items-center w-full md:w-35 mb-5 md:mb-0">
//             <img src={logoPadding.src} width={100} />
//             <div
//               style={{ width: "250px" }}
//               className="text-center mt-3 text-white"
//             >
//               {t.aboutDesc}
//             </div>
//           </div>
//           <div className="w-full md:w-65 flex flex-col md:flex-row justify-between gap-5 md:gap-20">
//             <div>
//               <div className="inline-block footerLink mb-2">
//                 {t.contactUsFooter}
//               </div>
//               <ol className="list-none text-white gap-3 flex flex-col">
//                 <li>{t.emailContact}</li>
//                 <li>@for_gaza1</li>
//                 <li>{t.phoneContact}</li>
//                 <li>{t.location}</li>
//               </ol>
//             </div>
//             <div>
//               <div className="inline-block footerLink mb-2">{t.donations}</div>
//               <ol className="list-none text-white gap-3 flex flex-col">
//                 <li>{t.campaigns}</li>
//                 <li>{t.projects}</li>
//                 <li>{t.warranties}</li>
//               </ol>
//             </div>
//             <div>
//               <div className="inline-block footerLink mb-2">{t.goTo}</div>
//               <ol className="list-none text-white gap-3 flex flex-col">
//                 <li>{t.home}</li>
//                 <li>{t.donate}</li>
//                 <li>{t.programs}</li>
//                 <li>{t.campaigns}</li>
//                 <li>{t.guarantees}</li>
//                 <li>{t.aboutUs}</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//         <hr />
//         <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4">
//           <div className="text-white">
//             {t.allRightsReserved} {new Date().getFullYear()}
//           </div>
//           <div>
//             <div className="flex gap-2">
//               <img src={Facebook.src} width={25} />
//               <img src={Telegram.src} width={25} />
//               <img src={twitter.src} width={25} />
//               <img src={tiktok.src} width={25} />
//               <img src={instagram.src} width={25} />
//               <img src={whatsapp.src} width={25} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";
import Facebook from "../../public/facebook.svg";
import Telegram from "../../public/telegram.svg";
import twitter from "../../public/twitter.svg";
import tiktok from "../../public/tiktok.svg";
import instagram from "../../public/instagram.svg";
import whatsapp from "../../public/whatsapp.svg";
import logoPadding from "../../public/logo-padding.png";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footerContainer">
      <div className="pt-5 pb-3 flex flex-col items-center">
        <div className="flex flex-col gap-10 md:flex-row w-[80%] p-4 mb-3 mt-3">
          <div className="flex flex-col items-center w-full md:w-35 mb-5 md:mb-0">
            <img src={logoPadding.src} width={100} />
            <div
              style={{ width: "250px" }}
              className="text-center mt-3 text-white"
            >
              {t.aboutDesc}
            </div>
          </div>
          <div className="w-full md:w-65 flex flex-col md:flex-row md:justify-around md:gap-x-20">
            <div>
              <div className="inline-block footerLink mb-2">
                {t.contactUsFooter}
              </div>
              <ol className="list-none text-white gap-3 flex flex-col">
                <li>{t.emailContact}</li>
                <li>@for_gaza1</li>
                <li>{t.phoneContact}</li>
                <li>{t.location}</li>
              </ol>
            </div>
            <div>
              <div className="inline-block footerLink mb-2">{t.donations}</div>
              <ol className="list-none text-white gap-3 flex flex-col">
                <li>{t.campaigns}</li>
                <li>{t.projects}</li>
                <li>{t.warranties}</li>
              </ol>
            </div>
            <div>
              <div className="inline-block footerLink mb-2">{t.goTo}</div>
              <ol className="list-none text-white gap-3 flex flex-col">
                <li>{t.home}</li>
                <li>{t.donate}</li>
                <li>{t.programs}</li>
                <li>{t.campaigns}</li>
                <li>{t.guarantees}</li>
                <li>{t.aboutUs}</li>
              </ol>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 p-4">
          <div className="text-white">
            {t.allRightsReserved} {new Date().getFullYear()}
          </div>
          <div>
            <div className="flex gap-2">
              <img src={Facebook.src} width={25} />
              <img src={Telegram.src} width={25} />
              <img src={twitter.src} width={25} />
              <img src={tiktok.src} width={25} />
              <img src={instagram.src} width={25} />
              <img src={whatsapp.src} width={25} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
