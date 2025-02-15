import Sponsorships from "../SponsorshipPage/Sponsorships";

export default function SponsorshipPage() {
  return (
    <div>
      {/* Responsive Filter Section */}
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap gap-4 px-4 py-5 min-w-max lg:justify-center">
          <div className="donation-button flex items-center whitespace-nowrap">
            All
            <hr className="h-6 w-px bg-[#47a896] ml-3" />
          </div>
          <div className="flex items-center whitespace-nowrap">
            Medical
            <hr className="h-6 w-px bg-gray-400 ml-3" />
          </div>
          <div className="flex items-center whitespace-nowrap">
            Orphans
            <hr className="h-6 w-px bg-gray-400 ml-3" />
          </div>
          <div className="flex items-center whitespace-nowrap">
            Humanitarian
          </div>
        </div>
      </div>

      {/* Sponsorships Content */}
      <div className="container mx-auto px-4">
        <Sponsorships />
      </div>
    </div>
  );
}
