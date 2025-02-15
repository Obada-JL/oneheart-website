import AboutSection from "../aboutSections/about";
import GeneralFields from "../aboutSections/generalFields";

export default function AboutUs() {
  return (
    <div>
      <div className="mb-12">
        <div
          className="relative p-7 flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#47a896" }}
        >
          <h1 className="text-white text-2xl flex gap-1 items-center font-bold relative z-10">
            <span className="text-yellow-500 font-bold text-3xl">|</span>
            <div>About Us</div>
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
      <div className="mb-10">
        <AboutSection />
      </div>
      <div className="flex justify-center mb-10">
        <hr
          className="rounded-2xl"
          style={{
            width: "80%",
            height: "2px ",
            background: "#47a896",
          }}
        />
      </div>
      <div className="">
        <GeneralFields />
      </div>
    </div>
  );
}
