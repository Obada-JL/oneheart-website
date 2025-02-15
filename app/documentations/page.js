import Slider1 from "../../public/sliderImage1.jpg";
export default function Documentations() {
  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="relative flex flex-col items-center">
        {/* Timeline */}
        <div className="absolute w-1 border-l-2 min-h-screen border-dashed border-gray-800 h-full left-1/2 transform -translate-x-1/2"></div>

        {/* Timeline Events */}
        <div className="flex flex-col items-center w-screen pt-12">
          {/* Left Card */}
          <div className="flex justify-end w-3/4 mb-8 relative">
            <div className="relative w-[240px] rounded-bl-full  border-b-2 my-auto   border-dashed border-gray-800 h-1"></div>
            <div className="relative w-6 left-0 flex items-start justify-start ">
              <div className="absolute right-1/2  w-6 h-6 border-r-2 border-b-2 border-green-500  transform -translate-x-[50%-10px] translate-y-[17px] rotate-[-45deg]"></div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md w-[300px] text-left relative me-3">
              <h2 className="text-lg font-semibold flex items-center">
                <span className="text-yellow-500 text-2xl mr-2">fffffff</span>
                Warm a Heart Campaign Photos
              </h2>
              <p className="text-gray-600 text-sm mt-2">
                The "Warm a Heart" campaign in Gaza provides winter clothing to
                families in need during harsh winters.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <img
                  src={Slider1.src}
                  width={150}
                  height={100}
                  className="rounded-lg"
                  alt="Children in Gaza"
                />
                <img
                  src={Slider1.src}
                  width={150}
                  height={100}
                  className="rounded-lg"
                  alt="Child in tent"
                />
                <div className="col-span-2 h-[100px] relative object-cover">
                  <img
                    src={Slider1.src}
                    width={300}
                    // height={100}
                    className="rounded-lg object-cover h-full"
                    alt="Girl in mask"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="absolute md:order-none z-5 transform -translate-y-1/2 md:translate-y-0 w-16 h-16 bg-yellow-500 flex items-center justify-center rounded-full shadow-md border"
                      style={{
                        // left: "calc(50% - 45px)",
                        top: "-40px",
                        zIndex: "5",
                      }}
                    >
                      <p className="text-center text-sm text-black">
                        Warm a Heart
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-600">
                View All
              </button>
            </div>
            {/* Turn Line */}
          </div>

          {/* Right Card */}
          <div className="flex justify-start w-1/2 pl-8 mb-8 relative">
            <div className="bg-white p-4 rounded-lg shadow-md w-60 relative">
              Helping Families
              <div className="absolute top-1/2 left-[-24px] w-6 h-6 border-t-2 border-r-2 border-green-500 transform rotate-[135deg]"></div>
            </div>
            {/* Turn Line */}
            <div className="absolute left-0 top-1/2 w-6 h-6 border-l-2 border-b-2 border-green-500 transform -translate-x-1/2 rotate-[135deg]"></div>
          </div>

          {/* Left Card */}
          <div className="flex justify-end w-1/2 pr-8 mb-8 relative">
            <div className="bg-white p-4 rounded-lg shadow-md w-60 text-right relative">
              Winter Clothing Drive
              <div className="absolute top-1/2 right-[-24px] w-6 h-6 border-t-2 border-l-2 border-green-500 transform rotate-[-135deg]"></div>
            </div>
            {/* Turn Line */}
            <div className="absolute right-0 top-1/2 w-6 h-6 border-r-2 border-b-2 border-green-500 transform translate-x-1/2 rotate-[-135deg]"></div>
          </div>

          {/* Right Card */}
          <div className="flex justify-start w-1/2 pl-8 relative">
            <div className="bg-white p-4 rounded-lg shadow-md w-60 relative">
              Support for Gaza
              <div className="absolute top-1/2 left-[-24px] w-6 h-6 border-t-2 border-r-2 border-green-500 transform rotate-[135deg]"></div>
            </div>
            {/* Turn Line */}
            <div className="absolute left-0 top-1/2 w-6 h-6 border-l-2 border-b-2 border-green-500 transform -translate-x-1/2 rotate-[135deg]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
