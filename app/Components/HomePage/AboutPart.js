"use client";
import campaginsVector from "../../../public/campagins-vector.png";
import completedVector from "../../../public/completed-vector.png";
import beneficiariesVector from "../../../public/beneficiaries-vector.png";
import donationsVector from "../../../public/donations-vector.png";
import CountUp from "react-countup";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";

export default function AboutPart() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container-fluid">
      <div className="flex flex-col items-center justify-center my-5 md:my-10">
        <div className="mb-5">
          <h1 className="mainHeaders text-center px-4">{t.aboutUs}</h1>
        </div>
        <div className="flex justify-center px-4">
          <div className="text-center w-full md:w-7/12 leading-7 md:leading-8">
            {t.aboutDesc}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-5 md:my-10">
        <div className="mb-5">
          <h1 className="mainHeaders text-center px-4">
            {t.ourImpactTogether}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 w-full px-4">
          <div className="counterContainer">
            <div className="flex justify-center items-center gap-3 mb-3 ps-5 pe-5">
              <img
                src={campaginsVector.src}
                alt="campagins-vector"
                width={35}
              />{" "}
              <div className="text-xl font-semibold">
                <CountUp end={20} duration={2.5} enableScrollSpy />
              </div>
            </div>
            <hr className="counterLine" />
            <div className="text-xl font-semibold text-center mt-2">
              {t.campaigns}
            </div>
          </div>
          <div className="counterContainer">
            <div className="flex justify-center items-center gap-3 mb-3 ps-5 pe-5">
              <img
                src={campaginsVector.src}
                alt="campagins-vector"
                width={35}
              />{" "}
              <div className="text-xl font-semibold">
                <CountUp end={70} duration={2.5} enableScrollSpy />
              </div>
            </div>
            <hr className="counterLine" />
            <div className="text-xl font-semibold text-center mt-2">
              {t.sponsorship}
            </div>
          </div>
          <div className="counterContainer">
            <div className="flex justify-center items-center gap-3 mb-3 ps-5 pe-5">
              <img
                src={completedVector.src}
                alt="campagins-vector"
                width={35}
              />{" "}
              <div className="text-xl font-semibold">
                <CountUp end={25} duration={2.5} enableScrollSpy />
              </div>
            </div>
            <hr className="counterLine" />
            <div className="text-xl font-semibold text-center mt-2">
              {t.completedProjects}
            </div>
          </div>
          <div className="counterContainer">
            <div className="flex justify-center items-center gap-3 mb-3 ps-5 pe-5">
              <img
                src={donationsVector.src}
                alt="campagins-vector"
                width={35}
              />{" "}
              <div className="text-xl font-semibold">
                <CountUp
                  end={20000}
                  duration={2.5}
                  enableScrollSpy
                  separator=","
                />
              </div>
            </div>
            <hr className="counterLine" />
            <div className="text-xl font-semibold text-center mt-2">
              {t.totalDonations}
            </div>
          </div>
          <div className="counterContainer">
            <div className="flex justify-center items-center gap-3 mb-3 ps-5 pe-5">
              <img
                src={beneficiariesVector.src}
                alt="campagins-vector"
                width={35}
              />{" "}
              <div className="text-xl font-semibold">
                <CountUp
                  end={5800}
                  duration={2.5}
                  enableScrollSpy
                  separator=","
                />
              </div>
            </div>
            <hr className="counterLine" />
            <div className="text-xl font-semibold text-center mt-2">
              {t.numberOfBeneficiaries}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
