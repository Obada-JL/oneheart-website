import Slider1 from "../../public/sliderImage1.jpg";
export default function Documentations() {
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
        <div className="flex justify-center items-center min-h-screen py-12">
          <div className="relative flex flex-col  items-center w-full max-w-4xl">
            {/* Timeline */}
            <div className="absolute w-1 border-l-2 border-dashed min-h-screen border-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
            <div
              className="absolute w-8 h-8  me-[2px] top-0 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#47a896" }}
            ></div>
            {/* Timeline Events */}
            <div className="flex flex-col">
              {/* Left Card */}
              <div className="flex flex-row-reverse w-full items-center justify-end align-center   mb-8 relative transform -translate-x-1/2">
                <div className="relative w-1 border-b-2 border-dashed border-gray-600 h-5 right-0  w-2/3 top-1/2 rounded-br-3xl"></div>
                <div
                  className="bg-white p-4 me-5 rounded-lg  relative "
                  style={{ width: "600px", height: "450px" }}
                >
                  <div className="bg-white rounded-xl ">
                    <h1 className="text-lg flex gap-1 items-center font-bold relative z-10">
                      <span className="text-yellow-500 font-bold text-3xl">
                        |
                      </span>
                      <div>Warm a Heart Campaign Photos</div>
                    </h1>
                    <p className="text-gray-600 text-start text-sm mt-2">
                      The "Warm a Heart" campaign in Gaza provides winter
                      clothing to families in need during harsh winters.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-[-10px] right-[-10px] grid grid-cols-4 gap-1">
                          {Array(16)
                            .fill(null)
                            .map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-500 rounded-full"
                              ></div>
                            ))}
                        </div>
                        <div
                          className="absolute z-5 p-2 transform -translate-y-1/2 md:translate-y-0 top-[calc(50%-60px)] left-[calc(50% -50px)] w-20 h-20  flex items-center justify-center rounded-full"
                          style={{
                            // left: "calc(50% - 45px)",
                            // top: "calc(50% - 45px)",
                            zIndex: "10",
                            backgroundColor: "#47a896",
                          }}
                        >
                          <p className="text-center text-xs font-semibold text-white">
                            One Heart Team
                          </p>
                        </div>
                      </div>
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                      />
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                        style={{ zIndex: "8" }}
                      />
                      <div className="col-span-2 relative h-[150px]">
                        <img
                          src={Slider1.src}
                          width={150}
                          height={100}
                          className="rounded-lg w-full h-full"
                          style={{ objectFit: "cover" }}
                          alt="Children in Gaza"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        className="mt-4 w-full text-center text-white py-2 rounded-lg text-sm font-semibold inline-block"
                        style={{ backgroundColor: "#47a896", width: "150px" }}
                        href="/documentations/details/123123"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%-2px)] right-[-35px] w-6 h-6 border-t-2 border-l-2 border-gray-600 transform rotate-[-45deg]"></div>
                </div>
              </div>

              {/* Right Card */}
              <div className="flex  w-full items-center justify-end align-center   mb-8 relative transform translate-x-1/2">
                <div
                  className="absolute w-8 h-8  me-[2px] top-0 transform -translate-x-1/2 left-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#47a896" }}
                ></div>
                <div className="relative w-1 border-b-2 border-dashed border-gray-600 h-5 right-0  w-2/3 top-1/2 rounded-bl-3xl"></div>
                <div
                  className="bg-white p-4 me-5 rounded-lg  relative "
                  style={{ width: "600px", height: "450px" }}
                >
                  <div className="bg-white rounded-xl ">
                    <h1 className="text-lg flex gap-1 items-center font-bold relative z-10">
                      <span className="text-yellow-500 font-bold text-3xl">
                        |
                      </span>
                      <div>Warm a Heart Campaign Photos</div>
                    </h1>
                    <p className="text-gray-600 text-start text-sm mt-2">
                      The "Warm a Heart" campaign in Gaza provides winter
                      clothing to families in need during harsh winters.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-[-10px] right-[-10px] grid grid-cols-4 gap-1">
                          {Array(16)
                            .fill(null)
                            .map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-500 rounded-full"
                              ></div>
                            ))}
                        </div>
                        <div
                          className="absolute z-5 p-2 transform -translate-y-1/2 md:translate-y-0 top-[calc(50%-60px)] left-[calc(50% -50px)] w-20 h-20  flex items-center justify-center rounded-full"
                          style={{
                            // left: "calc(50% - 45px)",
                            // top: "calc(50% - 45px)",
                            zIndex: "10",
                            backgroundColor: "#47a896",
                          }}
                        >
                          <p className="text-center text-xs font-semibold text-white">
                            One Heart Team
                          </p>
                        </div>
                      </div>
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                      />
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                        style={{ zIndex: "8" }}
                      />
                      <div className="col-span-2 relative h-[150px]">
                        <img
                          src={Slider1.src}
                          width={150}
                          height={100}
                          className="rounded-lg w-full h-full"
                          style={{ objectFit: "cover" }}
                          alt="Children in Gaza"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        className="mt-4 w-full text-center text-white py-2 rounded-lg text-sm font-semibold inline-block"
                        style={{ backgroundColor: "#47a896", width: "150px" }}
                        href="/documentations/details/123123"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%-2px)] left-[-15px] w-6 h-6 border-t-2 border-l-2 border-gray-600 transform  rotate-[135deg]"></div>
                </div>
              </div>

              {/* Left Card */}
              <div className="flex flex-row-reverse w-full items-center justify-end align-center   mb-8 relative transform -translate-x-1/2">
                <div className="relative w-1 border-b-2 border-dashed border-gray-600 h-5 right-0  w-2/3 top-1/2 rounded-br-3xl"></div>
                <div
                  className="bg-white p-4 me-5 rounded-lg  relative "
                  style={{ width: "600px", height: "450px" }}
                >
                  <div className="bg-white rounded-xl ">
                    <h1 className="text-lg flex gap-1 items-center font-bold relative z-10">
                      <span className="text-yellow-500 font-bold text-3xl">
                        |
                      </span>
                      <div>Warm a Heart Campaign Photos</div>
                    </h1>
                    <p className="text-gray-600 text-start text-sm mt-2">
                      The "Warm a Heart" campaign in Gaza provides winter
                      clothing to families in need during harsh winters.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-[-10px] right-[-10px] grid grid-cols-4 gap-1">
                          {Array(16)
                            .fill(null)
                            .map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-500 rounded-full"
                              ></div>
                            ))}
                        </div>
                        <div
                          className="absolute z-5 p-2 transform -translate-y-1/2 md:translate-y-0 top-[calc(50%-60px)] left-[calc(50% -50px)] w-20 h-20  flex items-center justify-center rounded-full"
                          style={{
                            // left: "calc(50% - 45px)",
                            // top: "calc(50% - 45px)",
                            zIndex: "10",
                            backgroundColor: "#47a896",
                          }}
                        >
                          <p className="text-center text-xs font-semibold text-white">
                            One Heart Team
                          </p>
                        </div>
                      </div>
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                      />
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                        style={{ zIndex: "8" }}
                      />
                      <div className="col-span-2 relative h-[150px]">
                        <img
                          src={Slider1.src}
                          width={150}
                          height={100}
                          className="rounded-lg w-full h-full"
                          style={{ objectFit: "cover" }}
                          alt="Children in Gaza"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        className="mt-4 w-full text-center text-white py-2 rounded-lg text-sm font-semibold inline-block"
                        style={{ backgroundColor: "#47a896", width: "150px" }}
                        href="/documentations/details/123123"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%-2px)] right-[-35px] w-6 h-6 border-t-2 border-l-2 border-gray-600 transform rotate-[-45deg]"></div>
                </div>
              </div>

              {/* Right Card */}
              <div className="flex  w-full items-center justify-end align-center   mb-8 relative transform translate-x-1/2">
                <div
                  className="absolute w-8 h-8  me-[2px] top-0 transform -translate-x-1/2 left-0 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#47a896" }}
                ></div>
                <div className="relative w-1 border-b-2 border-dashed border-gray-600 h-5 right-0  w-2/3 top-1/2 rounded-bl-3xl"></div>
                <div
                  className="bg-white p-4 me-5 rounded-lg  relative "
                  style={{ width: "600px", height: "450px" }}
                >
                  <div className="bg-white rounded-xl ">
                    <h1 className="text-lg flex gap-1 items-center font-bold relative z-10">
                      <span className="text-yellow-500 font-bold text-3xl">
                        |
                      </span>
                      <div>Warm a Heart Campaign Photos</div>
                    </h1>
                    <p className="text-gray-600 text-start text-sm mt-2">
                      The "Warm a Heart" campaign in Gaza provides winter
                      clothing to families in need during harsh winters.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-[-10px] right-[-10px] grid grid-cols-4 gap-1">
                          {Array(16)
                            .fill(null)
                            .map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-500 rounded-full"
                              ></div>
                            ))}
                        </div>
                        <div
                          className="absolute z-5 p-2 transform -translate-y-1/2 md:translate-y-0 top-[calc(50%-60px)] left-[calc(50% -50px)] w-20 h-20  flex items-center justify-center rounded-full"
                          style={{
                            // left: "calc(50% - 45px)",
                            // top: "calc(50% - 45px)",
                            zIndex: "10",
                            backgroundColor: "#47a896",
                          }}
                        >
                          <p className="text-center text-xs font-semibold text-white">
                            One Heart Team
                          </p>
                        </div>
                      </div>
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                      />
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                        style={{ zIndex: "8" }}
                      />
                      <div className="col-span-2 relative h-[150px]">
                        <img
                          src={Slider1.src}
                          width={150}
                          height={100}
                          className="rounded-lg w-full h-full"
                          style={{ objectFit: "cover" }}
                          alt="Children in Gaza"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        className="mt-4 w-full text-center text-white py-2 rounded-lg text-sm font-semibold inline-block"
                        style={{ backgroundColor: "#47a896", width: "150px" }}
                        href="/documentations/details/123123"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%-2px)] left-[-15px] w-6 h-6 border-t-2 border-l-2 border-gray-600 transform  rotate-[135deg]"></div>
                </div>
              </div>
              {/* Left Card */}
              <div className="flex flex-row-reverse w-full items-center justify-end align-center   mb-8 relative transform -translate-x-1/2">
                <div className="relative w-1 border-b-2 border-dashed border-gray-600 h-5 right-0  w-2/3 top-1/2 rounded-br-3xl"></div>
                <div
                  className="bg-white p-4 me-5 rounded-lg  relative "
                  style={{ width: "600px", height: "450px" }}
                >
                  <div className="bg-white rounded-xl ">
                    <h1 className="text-lg flex gap-1 items-center font-bold relative z-10">
                      <span className="text-yellow-500 font-bold text-3xl">
                        |
                      </span>
                      <div>Warm a Heart Campaign Photos</div>
                    </h1>
                    <p className="text-gray-600 text-start text-sm mt-2">
                      The "Warm a Heart" campaign in Gaza provides winter
                      clothing to families in need during harsh winters.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-4 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="absolute top-[-10px] right-[-10px] grid grid-cols-4 gap-1">
                          {Array(16)
                            .fill(null)
                            .map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 bg-yellow-500 rounded-full"
                              ></div>
                            ))}
                        </div>
                        <div
                          className="absolute z-5 p-2 transform -translate-y-1/2 md:translate-y-0 top-[calc(50%-60px)] left-[calc(50% -50px)] w-20 h-20  flex items-center justify-center rounded-full"
                          style={{
                            // left: "calc(50% - 45px)",
                            // top: "calc(50% - 45px)",
                            zIndex: "10",
                            backgroundColor: "#47a896",
                          }}
                        >
                          <p className="text-center text-xs font-semibold text-white">
                            One Heart Team
                          </p>
                        </div>
                      </div>
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                      />
                      <img
                        src={Slider1.src}
                        width={150}
                        height={100}
                        className="rounded-lg w-full"
                        alt="Children in Gaza"
                        style={{ zIndex: "8" }}
                      />
                      <div className="col-span-2 relative h-[150px]">
                        <img
                          src={Slider1.src}
                          width={150}
                          height={100}
                          className="rounded-lg w-full h-full"
                          style={{ objectFit: "cover" }}
                          alt="Children in Gaza"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <a
                        className="mt-4 w-full text-center text-white py-2 rounded-lg text-sm font-semibold inline-block"
                        style={{ backgroundColor: "#47a896", width: "150px" }}
                        href="/documentations/details/123123"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-[calc(50%-2px)] right-[-35px] w-6 h-6 border-t-2 border-l-2 border-gray-600 transform rotate-[-45deg]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
