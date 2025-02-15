"use client";
import { useParams } from "next/navigation";
import Slider1 from "../../../../public/sliderImage1.jpg";
export default function DocDetails() {
  const { id } = useParams(); // Access the dynamic parameter

  return (
    <div>
      <div className="mb-12">
        <div
          className="relative p-7 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#47a896" }}
        >
          <h1 className="text-white text-2xl flex gap-1 items-center font-bold relative z-10">
            <span className="text-yellow-500 font-bold text-3xl">|</span>
            <div>Photos</div>
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
      <div>
        <div>
          <h1>Post ID: {id}</h1>
          <p>This is the post page for ID: {id}</p>
        </div>
        <div className="flex mt-10 justify-center mb-12">
          <div className="grid grid-cols-3 gap-10 justify-center relative">
            {[
              Slider1,
              Slider1,
              Slider1,
              Slider1,
              Slider1,
              Slider1,
              Slider1,
            ].map((img, index) => (
              <img
                key={index}
                src={img.src}
                width={400}
                className="rounded-2xl"
              />
            ))}
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
      </div>
    </div>
  );
}
