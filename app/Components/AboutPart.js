"use client";
import campaginsVector from "../../public/campagins-vector.png";
import completedVector from "../../public/completed-vector.png";
import beneficiariesVector from "../../public/beneficiaries-vector.png";
import donationsVector from "../../public/donations-vector.png";
import CountUp from "react-countup";

export default function AboutPart() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="mb-5">
          <h1 className="mainHeaders">About Us</h1>
        </div>
        <div className="flex justify-center">
          <div className="text-center w-7/12 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-10">
        <div className="mb-5">
          <h1 className="mainHeaders">Our Impact Together</h1>
        </div>
        <div className="flex justify-around gap-5 mt-5">
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
              Campangins
            </div>
          </div>
          {/*  */}
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
              Sponshorship
            </div>
          </div>
          {/*  */}
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
              Completed Projects
            </div>
          </div>
          {/*  */}
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
              Total Donations
            </div>
          </div>
          {/*  */}
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
              Number of Beneficiaries
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
