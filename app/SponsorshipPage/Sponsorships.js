import donateVector from "../../public/donate-vector.svg";
import Slider1 from "../../public/sliderImage1.jpg";
export default function Sponsorships() {
  const cards = [
    {
      id: 1,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
      paidAmount: 2000,
      remainingAmount: 6000,
    },
    {
      id: 2,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
      paidAmount: 3780,
      remainingAmount: 6900,
    },
    {
      id: 3,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
      paidAmount: 9200,
      remainingAmount: 3000,
    },
    {
      id: 4,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
      paidAmount: 8500,
      remainingAmount: 4000,
    },
    {
      id: 5,
      title: "Essential Food Basket",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam glrt...",
      imgSrc: "https://via.placeholder.com/150",
      paidAmount: 87,
      remainingAmount: 4000,
    },
  ];

  return (
    <div className="container-fluid px-4 py-8">
      <div className="flex text-start mb-6">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Needs Your Support
        </h1>
      </div>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {cards.map((card) => {
              const totalAmount = card.paidAmount + card.remainingAmount;
              const percentage = (
                (card.paidAmount / totalAmount) *
                100
              ).toFixed(0);

              const getProgressColor = () => {
                if (percentage < 20) return " #D9534F"; // Red for < 20%
                if (percentage >= 20 && percentage <= 65) return " #FFAC00"; // Yellow for 30%-65%
                return "#0C9444"; // Green for > 65%
              };

              return (
                <div key={card.id} className="w-full">
                  <div className="rounded-2xl shadow-md bg-white w-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={Slider1.src}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-t-2xl"
                      />
                    </div>
                    <div className="p-4 categorysDescription">
                      <div className="text-xl font-semibold title">
                        {card.title}
                      </div>
                      <div className="text-sm text-gray-600 mt-2">
                        {card.description}
                      </div>

                      {/* Progress Bar */}
                      <div className="flex flex-col w-full mt-4 progressContainer">
                        <span className="text-start text-gray-700 text-xs">
                          Remaining ${card.remainingAmount} per month
                        </span>

                        <div className="w-full h-4 skill-box">
                          <div className="skill-bar">
                            <span
                              className="skill-per html"
                              style={{
                                "--before-bg": getProgressColor(),
                                width: `${percentage}%`, // Custom CSS variable
                              }}
                            >
                              <span
                                className={`${getProgressColor()} before:${getProgressColor()} tooltip`}
                                style={{
                                  "--before-bg": getProgressColor(), // Custom CSS variable
                                }}
                              >
                                {percentage}%
                              </span>
                            </span>
                          </div>
                        </div>
                        {/* <div className="flex justify-between w-full text-sm mt-2">
                          <span>Paid ${card.paidAmount}</span>
                          <span>Remaining ${card.remainingAmount}</span>
                        </div> */}
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <div className="flex items-center gap-2 donation-button categorysDonation">
                          <img
                            src={donateVector.src}
                            className="w-6 h-6"
                            alt="donate"
                          />
                          <span className="font-medium">Quick Donation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
