import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import SliderComponent from "./Components/HomePage/SliderComponent";
import AboutPart from "./Components/HomePage/AboutPart";
import DonatePart from "./Components/HomePage/DonatePart";
import Programs from "./Components/HomePage/Programs";
import RecentCampagins from "./Components/HomePage/RecentCampagins";

export default function Home() {
  return (
    <>
      <main className="HomePage flex-1">
        <SliderComponent />
        <AboutPart />
        <DonatePart />
        <Programs />
        <RecentCampagins />
      </main>
    </>
  );
}
